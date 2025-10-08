import { Controller, Post, Get } from '@nestjs/common';
import { KycService } from './kyc.service';

@Controller('kyc')
export class KycController {
  constructor(private readonly kycService: KycService) {}

  @Post('submit')
  submitKyc() { return this.kycService.submit(); }

  @Get('status')
  status() { return this.kycService.status(); }
}
