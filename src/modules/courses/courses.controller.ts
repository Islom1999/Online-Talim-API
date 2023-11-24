import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, UseInterceptors, UploadedFile, HttpStatus } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Public } from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';

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

  @HttpCode(HttpStatus.OK) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
