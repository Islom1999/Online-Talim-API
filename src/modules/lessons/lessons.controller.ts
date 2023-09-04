import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { RolesGuard } from 'src/common/guards';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Public } from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('lessons')
@Controller('lesson')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Roles('Admin')
  @UseGuards(RolesGuard)
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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(+id);
  }

  @Roles('Admin')
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonsService.update(+id, updateLessonDto);
  }

  @Roles('Admin')
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(+id);
  }
}
