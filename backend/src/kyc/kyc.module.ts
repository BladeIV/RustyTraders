﻿import { Module } from '@nestjs/common';
import { KycController } from './kyc.controller';
import { KycService } from './kyc.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [KycController],
  providers: [KycService, PrismaService],
})
export class KycModule {}
