import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class KycService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    fullName: string;
    idNumber: string;
    idFile: string | null;
    selfie: string | null;
  }) {
    try {
      return await this.prisma.kyc.create({
        data: {
          fullName: data.fullName,
          idNumber: data.idNumber,
          idFile: data.idFile,
          selfie: data.selfie,
          status: 'PENDING',
        },
      });
    } catch (err) {
      console.error('Error creating KYC:', err);
      throw new HttpException('Database error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findByUser(userId: string) {
    return this.prisma.kyc.findFirst({
      where: { userId: userId },
    });
  }

  async findAll() {
    return this.prisma.kyc.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async review(id: number, action: 'approve' | 'reject') {
    try {
      const record = await this.prisma.kyc.update({
        where: { id },
        data: {
          status: action === 'approve' ? 'APPROVED' : 'REJECTED',
          reviewedAt: new Date(),
        },
      });
      return { message: `KYC ${action}d successfully`, record };
    } catch (err) {
      console.error('Review update failed:', err);
      throw new HttpException('Record not found', HttpStatus.NOT_FOUND);
    }
  }
}
