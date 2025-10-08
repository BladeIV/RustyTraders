# --- Phase 2 Setup Script ---
Write-Host "Setting up Phase 2: KYC & Verification scaffolding..." -ForegroundColor Cyan

$base = "backend/src/kyc"
New-Item -ItemType Directory -Force -Path "$base/dto" | Out-Null
New-Item -ItemType Directory -Force -Path "$base/entities" | Out-Null

@"
import { Module } from '@nestjs/common';
import { KycService } from './kyc.service';
import { KycController } from './kyc.controller';

@Module({
  controllers: [KycController],
  providers: [KycService],
})
export class KycModule {}
"@ | Out-File "$base/kyc.module.ts" -Encoding utf8

@"
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
"@ | Out-File "$base/kyc.controller.ts" -Encoding utf8

@"
import { Injectable } from '@nestjs/common';

@Injectable()
export class KycService {
  submit() { return { message: 'KYC submission endpoint placeholder' }; }
  status() { return { message: 'KYC status endpoint placeholder' }; }
}
"@ | Out-File "$base/kyc.service.ts" -Encoding utf8

@"
export class SubmitKycDto {
  idDocument: string;
  selfie: string;
}
"@ | Out-File "$base/dto/submit-kyc.dto.ts" -Encoding utf8

@"
export class UpdateStatusDto {
  status: 'pending' | 'approved' | 'rejected';
}
"@ | Out-File "$base/dto/update-status.dto.ts" -Encoding utf8

Write-Host "✅ Phase 2 KYC scaffolding generated successfully." -ForegroundColor Green
