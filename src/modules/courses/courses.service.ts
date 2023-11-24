import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageService } from '../image/image.service';

@Injectable()
export class CoursesService {

  constructor(private prismaService: PrismaService, private _image: ImageService){}

  async create(createCourseDto: CreateCourseDto) {

    createCourseDto.amount = createCourseDto.amount

    if (createCourseDto.image) {
      await this._image.changeImageUsed(createCourseDto.image);
    }

    if(createCourseDto.paymentType == 'Free'){
      createCourseDto.amount = 0
    }
    else{
      if( createCourseDto.amount <= 0 ){
        throw new HttpException('pullik kursda amount = 0 bo\'lishi mumkinmas', HttpStatus.BAD_REQUEST )
      }
    }

    const course = await this.prismaService.course.create({
      data: {
        image: createCourseDto.image, 
        title: createCourseDto.title, 
        descr: createCourseDto.descr,
        authorName: createCourseDto.authorName,
        amount: createCourseDto.amount,
        categoryId: createCourseDto.categoryId,
        paymentType: createCourseDto.paymentType,
      }
    }) 
    return course; 
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
        },
        authors:{
          select: {
            user: true,
          }
        }
      }
    })
    if(!course[0]){
      throw new HttpException('No courses', HttpStatus.NOT_FOUND)
    }
    return course;
  }

  async findOne(id: string) {
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
        },
        authors:true
      }
    })
    if(!course){
      throw new HttpException('No course', HttpStatus.NOT_FOUND)
    }
    return course;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    if (updateCourseDto?.image) {
      await this._image.changeImageUsed(updateCourseDto.image);
    }
    if(updateCourseDto.paymentType == 'Free'){
      updateCourseDto.amount = 0
    }
    else{
      if( +updateCourseDto.amount <= 0 ){
        throw new HttpException('pullik kursda amount = 0 bo\'lishi mumkinmas', HttpStatus.BAD_REQUEST )
      }
    }
    const course = await this.prismaService.course.update({
      where: {id}, 
      data: {
        image: updateCourseDto.image,
        title: updateCourseDto.title, 
        descr: updateCourseDto.descr,
        authorName: updateCourseDto.authorName,
        amount: +updateCourseDto.amount,
        categoryId: updateCourseDto.categoryId,
        paymentType: updateCourseDto.paymentType,
      }
    })
    return course;
  }

  async remove(id: string) {
    const courseExist = await this.prismaService.course.findUnique({where: {id}})
    if(!courseExist) throw new HttpException("Course not found", HttpStatus.NOT_FOUND)
    const course = await this.prismaService.course.delete({where: {id}})
    await this._image.deleteImage(courseExist?.image);
    return course;
  }
}
