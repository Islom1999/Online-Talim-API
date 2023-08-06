import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursesService {

  constructor(private prismaService: PrismaService){}

  async create(createCourseDto: CreateCourseDto, image: Express.Multer.File) {
    let imageUrl:string
    if(image){
      imageUrl = image.filename
    }
    const course = await this.prismaService.course.create({
      data: {
        title: createCourseDto.title, 
        descr: createCourseDto.descr,
        author: createCourseDto.author,
        amount: +createCourseDto.amount,
        categoryId: +createCourseDto.categoryId,
        image: imageUrl
      }
    }) 
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

  async update(id: number, updateCourseDto: UpdateCourseDto, image: Express.Multer.File) {
    let imageUrl:string
    if(image){
      imageUrl = image.filename
    }
    const course = await this.prismaService.course.update({
      where: {id}, 
      data: {
        title: updateCourseDto.title, 
        descr: updateCourseDto.descr,
        author: updateCourseDto.author,
        amount: +updateCourseDto.amount,
        categoryId: +updateCourseDto.categoryId,
        image: imageUrl
      }
    })
    return {code: 200, data: course};
  }

  async remove(id: number) {
    const course = await this.prismaService.course.delete({where: {id}})
    return {code: 200, data: course};
  }
}
