import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AtStrategy, RtStrategy } from 'src/auth/strategies';
import { JwtModule } from '@nestjs/jwt';
import { BaseModule } from 'src/base/module/baseModule';
import { AdminModule } from 'src/auth/admin/admin.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminService } from 'src/auth/admin/admin.service';
import { ClientModule } from './client/client.module';
// import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [UserController],
  providers: [UserService, AdminService, RtStrategy, AtStrategy],
  imports: [
    PrismaModule,
    JwtModule.register({}),
    BaseModule,
    AdminModule,
    ClientModule,
  ],
})
export class UserModule {}
