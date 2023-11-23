import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsController } from './parts.controller';
import { SharedModule } from 'src/common/filter/sharedModule';

@Module({
  controllers: [PartsController],
  providers: [PartsService],
  imports: [
    SharedModule,
  ],
})
export class PartsModule {}
