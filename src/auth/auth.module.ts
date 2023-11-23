import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {
  AtStrategy,
  FacebookStrategy,
  RtStrategy,
  GoogleStrategy,
} from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { BaseModule } from 'src/base/module/baseModule';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [
    AuthService,
    RtStrategy,
    AtStrategy,
    GoogleStrategy,
    FacebookStrategy,
  ],
  controllers: [AuthController],
  imports: [
    PrismaModule,
    JwtModule.register({}),
    BaseModule,
    ClientModule,
    AdminModule,
  ],
  exports: [],
})
export class AuthModule {}
