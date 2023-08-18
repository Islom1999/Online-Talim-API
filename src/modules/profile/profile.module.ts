import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { SharedModule } from 'src/common/shared/sharedModule';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [
    SharedModule,
  ],
})
export class ProfileModule {}
