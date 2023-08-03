import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursesService {

  constructor(private prismaService: PrismaService){}

  async create(createCourseDto: CreateCourseDto) {
    const course = await this.prismaService.course.create({data: createCourseDto})
    return {code: 201, data: course};
  }

  async findAll() {
    const course = await this.prismaService.course.findMany({
      include: {
        category: {
          select: {
            title: true
          },
        },
        parts: {
          select: {
            title: true
          }
        }
      }
    })
    if(!course[0]){
      throw new HttpException('No courses', HttpStatus.NOT_FOUND)
    }
    return {code: 200, data: course};
  }

  async findOne(id: number) {
    const course = await this.prismaService.course.findUnique({
      where: {id}, 
      include: {
        category: {
          select: {
            title: true
          },
        },
        parts: {
          select: {
            title: true
          }
        }
      }
    })
    if(!course){
      throw new HttpException('No course', HttpStatus.NOT_FOUND)
    }
    return {code: 200, data: course};
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.prismaService.course.update({where: {id}, data: updateCourseDto})
    return {code: 200, data: course};
  }

  async remove(id: number) {
    const course = await this.prismaService.course.delete({where: {id}})
    return {code: 200, data: course};
  }
}
