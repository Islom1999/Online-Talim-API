import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import {
  AtStrategy,
  FacebookStrategy,
  GoogleStrategy,
  RtStrategy,
} from '../strategies';
import { JwtModule } from '@nestjs/jwt';
import { BaseModule } from 'src/base/module/baseModule';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [AdminService, RtStrategy, AtStrategy],
  controllers: [AdminController],
  imports: [PrismaModule, JwtModule.register({})],
})
export class AdminModule {}
