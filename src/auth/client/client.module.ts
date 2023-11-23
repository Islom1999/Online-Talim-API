import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
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
  providers: [
    ClientService,
    RtStrategy,
    AtStrategy,
    GoogleStrategy,
    FacebookStrategy,
  ],
  controllers: [ClientController],
  imports: [PrismaModule, JwtModule.register({}), BaseModule],
})
export class ClientModule {}
