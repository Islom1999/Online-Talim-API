import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { SharedModule } from 'src/common/filter/sharedModule';
import { ImageModule } from '../image/image.module';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [
    SharedModule,
    ImageModule,
    ClientModule,
    AdminModule,
  ],
})
export class CoursesModule {}
