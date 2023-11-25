import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryIdDto } from 'src/common/_query/query.dto';
import { Lesson } from '@prisma/client';
import { UpdateOrdersDto } from 'src/common/_query/order.dto';

@Injectable()
export class LessonsService {
  constructor(private prismaService: PrismaService){}

  async create(createLessonDto: CreateLessonDto) {
    const lesson = await this.prismaService.lesson.create({data: createLessonDto})
    return lesson;
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
    return lesson;
  }

  async findAllWithCourse(query: QueryIdDto):Promise<Lesson[]>{
    const lesson = await this.prismaService.lesson.findMany({
      orderBy: { order: 'asc' },
      where:{
        partId: query.id
      },
      include:{
        part: {
          select:{
            title: true
          }
        },
      }
    })
    if(!lesson[0]){
      throw new HttpException('No parts found', HttpStatus.NOT_FOUND)
    }
    return lesson;
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
    return lesson;
  }

  async update(id: string, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.prismaService.lesson.update({where: {id: id}, data: updateLessonDto})
    return lesson;
  }

  async updateLessonOrders(updatePartDto: UpdateOrdersDto): Promise<any> {
    const { orderIds } = updatePartDto;
    const ordersErr = []
    const ordersSuccess = []

    await Promise.all(
      orderIds.map(async (orderId, index) => {
        const model = await this.prismaService.lesson.findUnique({
          where: { id: orderId },
        });
        if (model) {
          this.prismaService.lesson.update({
            where: { id: orderId },
            data: { order: index },
          });
          ordersSuccess.push({ orderId, index })
        }else{
          ordersErr.push({ orderId, index })
        }
      }),
      );
    
    return {message: 'update orders', ordersSuccess, ordersErr}
  }

  async remove(id: string) {
    const lesson = await this.prismaService.lesson.delete({where: {id: id}})
    return lesson;
  }
}
