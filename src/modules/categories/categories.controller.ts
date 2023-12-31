import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, UseInterceptors, UploadedFile, HttpStatus, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Public } from 'src/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file.upload';
import { ApiTags } from '@nestjs/swagger';
import { UpdateOrdersDto } from 'src/common/_query/order.dto';
import { QueryDTO } from 'src/common/_query';

@ApiTags('category')
@Controller('category')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.categoriesService.create(createCategoryDto);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get('pagination')
  findAllPagination(@Query() query: QueryDTO) {
    return this.categoriesService.findAllPagination(query);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @HttpCode(200)
  @Patch('/update/orders')
  updateCourseOrders(@Body() updatePartDto: UpdateOrdersDto) {
    return this.categoriesService.updateCategoryOrders(updatePartDto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
