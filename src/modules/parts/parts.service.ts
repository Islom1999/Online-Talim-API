import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartsService {

  constructor(private prismaService: PrismaService){}

  async create(createPartDto: CreatePartDto) {
    const part = await this.prismaService.part.create({data: createPartDto})
    return {status: 200, data: part};
  }

  async findAll() {
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
    return {status: 200, data: part};
  }

  async findOne(id: number) {
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
    return {status: 200, data: part};
  }

  async update(id: number, updatePartDto: UpdatePartDto) {
    const part = await this.prismaService.part.update({where: {id}, data: updatePartDto})
    return {status: 200, data: part};
  } 

  async remove(id: number) {
    const part = await this.prismaService.part.delete({where: {id}})
    return {status: 200, data: part};
  }
}
