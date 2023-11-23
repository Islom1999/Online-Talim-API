import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { SharedModule } from 'src/common/filter/sharedModule';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService],
  imports: [
    SharedModule,
  ],
})
export class LessonsModule {} 
