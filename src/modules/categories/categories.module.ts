import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { SharedModule } from 'src/common/filter/sharedModule';
import { ImageModule } from '../image/image.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SharedModule,
    ImageModule
  ],
})
export class CategoriesModule {}
