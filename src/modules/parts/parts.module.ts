import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsController } from './parts.controller';
import { SharedModule } from 'src/common/filter/sharedModule';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [PartsController],
  providers: [PartsService],
  imports: [
    SharedModule,
    ClientModule,
    AdminModule,
  ],
})
export class PartsModule {}
