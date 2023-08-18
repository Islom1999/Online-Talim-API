import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { SharedModule } from 'src/common/shared/sharedModule';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [
    SharedModule,
  ],
})
export class CoursesModule {}
