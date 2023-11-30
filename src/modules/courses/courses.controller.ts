import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, UseInterceptors, UploadedFile, HttpStatus, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Public } from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { QueryDTO, QueryIdDto } from 'src/common/_query/query.dto';
import { UpdateOrdersDto } from 'src/common/_query/order.dto';

@ApiTags('courses')
@Controller('course')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(
    @Body() createCourseDto: CreateCourseDto,
  ) {
    return this.coursesService.create(createCourseDto);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Public()
  @HttpCode(200)
  @Get('withcategory')
  findAllWithCategory(@Query() query: QueryIdDto ) {
    return this.coursesService.findAllWithCategory(query);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get('pagination')
  findAllPagination(@Query() query: QueryDTO) {
    return this.coursesService.findAllPagination(query);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @HttpCode(200)
  @Patch('/update/orders')
  updateCourseOrders(@Body() updatePartDto: UpdateOrdersDto) {
    return this.coursesService.updateCourseOrders(updatePartDto);
  }

  @HttpCode(HttpStatus.OK) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
