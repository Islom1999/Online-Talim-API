import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file.upload';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('courses')
@Controller('course')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @HttpCode(201)
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName
      }),
      fileFilter: imageFileFilter
    })  
  )
  @Post()
  create(
    @Body() createCourseDto: CreateCourseDto,
    @UploadedFile() image: Express.Multer.File
  ) {
    return this.coursesService.create(createCourseDto, image);
  }

  @HttpCode(200)
  @Public()
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @HttpCode(200)
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @HttpCode(200)
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName
      }),
      fileFilter: imageFileFilter
    })  
  )
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateCourseDto: UpdateCourseDto,
    @UploadedFile() image: Express.Multer.File
  ) {
    return this.coursesService.update(+id, updateCourseDto, image);
  }

  @HttpCode(200) 
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
