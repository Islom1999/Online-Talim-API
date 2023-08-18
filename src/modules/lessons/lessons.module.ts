import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { AtStrategy, RtStrategy } from 'src/auth/strategies';
import { SharedModule } from 'src/common/shared/sharedModule';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService,  AtStrategy, RtStrategy],
  imports: [
    SharedModule,
  ],
})
export class LessonsModule {} 
