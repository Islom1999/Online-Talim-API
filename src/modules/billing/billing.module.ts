import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { SharedModule } from 'src/common/filter/sharedModule';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

@Module({
  controllers: [BillingController],
  providers: [BillingService],
  imports: [
    SharedModule,
    AdminModule,
    ClientModule,
  ],
})
export class BillingModule {}
