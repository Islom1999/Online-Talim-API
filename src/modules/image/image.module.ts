import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SharedModule } from 'src/common/filter/sharedModule';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
  imports: [
    PrismaModule,
    MulterModule.register({
      dest: './uploads',
    }),
    SharedModule
  ],
  exports: [ImageService]
})
export class ImageModule { }
