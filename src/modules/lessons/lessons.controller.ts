import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Public } from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { QueryIdDto } from 'src/common/_query/query.dto';
import { UpdateOrdersDto } from 'src/common/_query/order.dto';

@ApiTags('lessons')
@Controller('lesson')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  
  @HttpCode(201)
  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.lessonsService.findAll();
  }

  @Public()
  @HttpCode(200)
  @Get('withpart')
  findAllWithCourse(@Query() query: QueryIdDto ) {
    return this.lessonsService.findAllWithCourse(query);
  }

  @Public()
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  
  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonsService.update(id, updateLessonDto);
  }

  @HttpCode(200)
  @Patch('/update/orders')
  updateLessonOrders(@Body() updatePartDto: UpdateOrdersDto) {
    return this.lessonsService.updateLessonOrders(updatePartDto);
  }
  
  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(id);
  }
}
