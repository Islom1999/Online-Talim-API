import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { AtStrategy, RtStrategy } from 'src/auth/strategies';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService,  AtStrategy, RtStrategy]
})
export class LessonsModule {} 
