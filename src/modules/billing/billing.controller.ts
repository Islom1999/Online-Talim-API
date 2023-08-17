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

  // @Post()
  // create(@Body() createBillingDto: CreateBillingDto) {
  //   return this.billingService.create(createBillingDto);
  // }

  // @Get()
  // findAll() {
  //   return this.billingService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.billingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBillingDto: UpdateBillingDto) {
  //   return this.billingService.update(+id, updateBillingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.billingService.remove(+id);
  // }
}
