import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, Query } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { GetCurrentUserId } from 'src/common/decorators';
import { BilingQuery } from './dto/query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('billing')
@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  // users courses filte all
  @HttpCode(200)
  
  @Get()
  getAllBilling(
    @Query() bilingQuery: BilingQuery
  ) {
    return this.billingService.getAllBilling(bilingQuery);
  }

  // users billing free course
  @HttpCode(200)
  @Post(':id')
  createBillingFree(
    @Param('id') id: string,
    @GetCurrentUserId() userId: string
  ) {
    return this.billingService.createBillingFree(id, userId);
  }

  // admin add billing course
  @HttpCode(200)
  
  @Post('create/admin')
  createBillingAdmin(
    @Body() createBillingDto: CreateBillingDto
  ) {
    return this.billingService.createBillingAdmin(createBillingDto);
  }

  // admin update billing course - kursni uzaytirish
  @HttpCode(200)
  
  @Post('update/admin')
  updateBillingAdmin(
    @Body() updateBillingDto: UpdateBillingDto
  ) {
    return this.billingService.updateBillingAdmin(updateBillingDto);
  }

  // admin delete billing course
  @HttpCode(200)
  
  @Post('delete/:id')
  deleteBilingAdmin(
    @Param('id') id: string 
  ) {
    return this.billingService.deleteBilingAdmin(id);
  }
  
}
