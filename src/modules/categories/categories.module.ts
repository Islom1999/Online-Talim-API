import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { SharedModule } from 'src/common/shared/sharedModule';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SharedModule,
  ],
})
export class CategoriesModule {}
