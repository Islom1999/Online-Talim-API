import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LessonsService {
  constructor(private prismaService: PrismaService){}

  async create(createLessonDto: CreateLessonDto) {
    const lesson = await this.prismaService.lesson.create({data: createLessonDto})
    return {status: 201, data: lesson};
  }

  async findAll() {
    const lesson = await this.prismaService.lesson.findMany({
      include:{
        part: {
          select: {
            title: true
          }
        }
      }
    })
    if(!lesson[0]){
      throw new HttpException('No lessons found', HttpStatus.NOT_FOUND)
    }
    return {status: 200, data: lesson};
  }

  async findOne(id: string) {
    const lesson = await this.prismaService.lesson.findUnique({
      where: {id: id},
      include:{
        part: {
          select: {
            title: true 
          }
        }
      }
    })
    if(!lesson){
      throw new HttpException('No lesson found', HttpStatus.NOT_FOUND)
    }
    return {status: 200, data: lesson};
  }

  async update(id: string, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.prismaService.lesson.update({where: {id: id}, data: updateLessonDto})
    return {status: 200, data: lesson};
  }

  async remove(id: string) {
    const lesson = await this.prismaService.lesson.delete({where: {id: id}})
    return {status: 200, data: lesson};
  }
}
