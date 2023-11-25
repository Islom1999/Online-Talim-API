import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryIdDto } from 'src/common/_query/query.dto';
import { Part } from '@prisma/client';
import { UpdateOrdersDto } from 'src/common/_query/order.dto';
import { async } from 'rxjs';

@Injectable()
export class PartsService {
  constructor(private prismaService: PrismaService) {}

  async create(createPartDto: CreatePartDto) {
    const part = await this.prismaService.part.create({ data: createPartDto });
    return part;
  }

  async findAll(): Promise<Part[]> {
    const part = await this.prismaService.part.findMany({
      include: {
        course: {
          select: {
            title: true,
          },
        },
        lessons: {
          select: {
            title: true,
          },
        },
      },
    });
    if (!part[0]) {
      throw new HttpException('No parts found', HttpStatus.NOT_FOUND);
    }
    return part;
  }

  async findAllWithCourse(query: QueryIdDto): Promise<Part[]> {
    const part = await this.prismaService.part.findMany({
      orderBy: { order: 'asc' },
      where: {
        courseId: query.id,
      },
      include: {
        course: {
          select: {
            title: true,
          },
        },
        lessons: {
          select: {
            title: true,
          },
        },
      },
    });
    if (!part[0]) {
      throw new HttpException('No parts found', HttpStatus.NOT_FOUND);
    }
    return part;
  }

  async findOne(id: string): Promise<Part> {
    const part = await this.prismaService.part.findUnique({
      where: { id },
      include: {
        course: {
          select: {
            title: true,
          },
        },
        lessons: {
          select: {
            title: true,
          },
        },
      },
    });
    if (!part) {
      throw new HttpException('No part found', HttpStatus.NOT_FOUND);
    }
    return part;
  }

  async update(id: string, updatePartDto: UpdatePartDto): Promise<Part> {
    const part = await this.prismaService.part.update({
      where: { id },
      data: updatePartDto,
    });
    return part;
  }

  async updatePartOrders(updatePartDto: UpdateOrdersDto): Promise<any> {
    const { orderIds } = updatePartDto;
    const ordersErr = []
    const ordersSuccess = []

    await Promise.all(
      orderIds.map(async (orderId, index) => {
        const model = await this.prismaService.part.findUnique({
          where: { id: orderId },
        });
        if (model) {
          this.prismaService.part.update({
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

  async remove(id: string): Promise<Part> {
    const part = await this.prismaService.part.delete({ where: { id } });
    return part;
  }
}
