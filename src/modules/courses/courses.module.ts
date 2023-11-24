import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { SharedModule } from 'src/common/filter/sharedModule';
import { ImageModule } from '../image/image.module';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [
    SharedModule,
    ImageModule,
  ],
})
export class CoursesModule {}
