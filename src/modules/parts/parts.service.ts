import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto, UpdatePartOrdersDto } from './dto/update-part.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryIdDto } from 'src/common/_query/query.dto';
import { Part } from '@prisma/client';

@Injectable()
export class PartsService {

  constructor(private prismaService: PrismaService){}

  async create(createPartDto: CreatePartDto) {
    const part = await this.prismaService.part.create({data: createPartDto})
    return part;
  }

  async findAll():Promise<Part[]> {
    const part = await this.prismaService.part.findMany({
      include:{
        course: {
          select:{
            title: true
          }
        },
        lessons: {
          select:{
            title: true
          }
        }
      }
    })
    if(!part[0]){
      throw new HttpException('No parts found', HttpStatus.NOT_FOUND)
    }
    return part;
  }

  async findAllWithCourse(query: QueryIdDto):Promise<Part[]>{
    const part = await this.prismaService.part.findMany({
      orderBy: { order: 'asc' },
      where:{
        courseId: query.id
      },
      include:{
        course: {
          select:{
            title: true
          }
        },
        lessons: {
          select:{
            title: true
          }
        }
      }
    })
    if(!part[0]){
      throw new HttpException('No parts found', HttpStatus.NOT_FOUND)
    }
    return part;
  }

  async findOne(id: string):Promise<Part>{
    const part = await this.prismaService.part.findUnique({ 
      where: {id},
      include:{
        course: {
          select:{
            title: true
          }
        },
        lessons: {
          select:{
            title: true
          }
        }
      }
    })
    if(!part){
      throw new HttpException('No part found', HttpStatus.NOT_FOUND)
    }
    return part;
  }

  async update(id: string, updatePartDto: UpdatePartDto):Promise<Part>{
    const part = await this.prismaService.part.update({where: {id}, data: updatePartDto})
    return part;
  } 

  async updatePartOrders(updatePartDto: UpdatePartOrdersDto):Promise<any>{
    const { partIds } = updatePartDto;

    // Har bir part uchun yangi tartibni saqlash
    await Promise.all(
      partIds.map((partId, index) => 
        this.prismaService.part.update({
          where: { id: partId },
          data: { order: index },
        })
      )
    );

    return { status: 'success update parts orders' };
  } 

  async remove(id: string):Promise<Part>{
    const part = await this.prismaService.part.delete({where: {id}})
    return part;
  }
}
