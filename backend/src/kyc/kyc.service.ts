import { Injectable } from '@nestjs/common';

@Injectable()
export class KycService {
  submit() { return { message: 'KYC submission endpoint placeholder' }; }
  status() { return { message: 'KYC status endpoint placeholder' }; }
}
