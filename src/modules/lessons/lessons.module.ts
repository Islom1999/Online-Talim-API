import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { SharedModule } from 'src/common/filter/sharedModule';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService],
  imports: [
    SharedModule,
    AdminModule,
    ClientModule,
  ],
})
export class LessonsModule {} 
