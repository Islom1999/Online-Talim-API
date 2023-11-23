import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { SharedModule } from 'src/common/filter/sharedModule';

@Module({
  controllers: [BillingController],
  providers: [BillingService],
  imports: [
    SharedModule,
  ],
})
export class BillingModule {}
