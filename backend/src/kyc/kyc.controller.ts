import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  UploadedFiles,
  UseInterceptors,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { KycService } from './kyc.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('kyc')
export class KycController {
  constructor(private readonly kycService: KycService) {}

  // --- KYC submission from frontend ---
  @Post('submit')
  @UseInterceptors(
    FilesInterceptor('files', 2, {
      storage: diskStorage({
        destination: './uploads/kyc',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
    }),
  )
  async submitKyc(
    @UploadedFiles() files: Express.Multer.File[],
    @Body('data') data: string,
  ) {
    try {
      const parsed = JSON.parse(data);
      const idFile = files?.[0]?.filename || null;
      const selfie = files?.[1]?.filename || null;

      if (!parsed.fullName || !parsed.idNumber)
        throw new HttpException('Missing required fields', HttpStatus.BAD_REQUEST);

      return await this.kycService.create({
        fullName: parsed.fullName,
        idNumber: parsed.idNumber,
        idFile,
        selfie,
      });
    } catch (err) {
      console.error('KYC submission error:', err);
      throw new HttpException('Invalid KYC submission', HttpStatus.BAD_REQUEST);
    }
  }

  // --- Get single user's KYC status ---
  @Get('status/:userId')
  async getStatus(@Param('userId') userId: string) {
    const record = await this.kycService.findByUser(userId);
    if (!record)
      throw new HttpException('No KYC record found', HttpStatus.NOT_FOUND);
    return record;
  }

  // --- Get all submissions for admin review ---
  @Get('status/all')
  async getAll() {
    return this.kycService.findAll();
  }

  // --- Approve or reject ---
  @Patch('review/:id')
  async reviewKyc(@Param('id') id: string, @Body('action') action: string) {
    if (!['approve', 'reject'].includes(action))
      throw new HttpException('Invalid action', HttpStatus.BAD_REQUEST);

    return this.kycService.review(parseInt(id, 10), action);
  }
}
