import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards';
import { GetCurrentUserId } from 'src/common/decorators';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  // users billing free course
  @HttpCode(200)
  @Roles('User')
  @UseGuards(RolesGuard)
  @Post(':id')
  createBillingFree(
    @Param('id') id: string,
    @GetCurrentUserId() userId: number
  ) {
    return this.billingService.createBillingFree(+id, userId);
  }

  // admin add billing course
  @HttpCode(200)
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @Post('create/admin')
  createBillingAdmin(
    @Body() createBillingDto: CreateBillingDto
  ) {
    return this.billingService.createBillingAdmin(createBillingDto);
  }

  
}
