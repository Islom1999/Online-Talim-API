import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { SharedModule } from 'src/common/filter/sharedModule';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [PrismaModule, SharedModule, AdminModule, ClientModule],
})
export class RoleModule {}
