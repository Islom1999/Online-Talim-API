import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageService } from '../image/image.service';
import { UpdateOrdersDto } from 'src/common/_query/order.dto';
import { QueryDTO } from 'src/common/_query';

@Injectable()
export class CategoriesService {

  constructor(private prismService: PrismaService, private _image: ImageService){}

  async create(createCategoryDto: CreateCategoryDto) {
    if (createCategoryDto.image) {
      await this._image.changeImageUsed(createCategoryDto.image);
    }
    const category = await this.prismService.category.create({
      data: {...createCategoryDto}
    });
    return category;
  } 

  async findAll() {
    const category = await this.prismService.category.findMany({
      include: {
        courses: {
          select: {
            image: true,
            title: true,
            descr: true,
          }
        }
      }
    })
    if(!category[0]){
      throw new HttpException('No categories', HttpStatus.NOT_FOUND)
    }
    return category
  }

  async findAllPagination(queryDto: QueryDTO) {
    const search = queryDto.search || '';
    const page = +queryDto.page || 1;
    const limit = +queryDto.limit || 25;
    const skip = (page - 1) * limit;

    const count = await this.prismService.category.count();

    const model = await this.prismService.category.findMany({
      orderBy: { id: 'asc' },
      where: {
        title: {
          contains: search,
          mode: 'insensitive',
        },
      },
      skip,
      take: limit,
    });

    if (!model[0]) throw new HttpException('not found', HttpStatus.NOT_FOUND);

    return { data: model, count };
  }

  async findOne(id: string) {
    const category = await this.prismService.category.findUnique({
      where: {id: id},
      include: {
        courses: {
          select: {
            image: true,
            title: true,
            descr: true,
          }
        }
      }
    })
    if(!category){
      throw new HttpException('No category', HttpStatus.NOT_FOUND)
    }
    return category
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const image = updateCategoryDto.image

    const model = await this.prismService.category.findUnique({where: {id: id}})

    if(!model) throw new HttpException('No category', HttpStatus.NOT_FOUND)

    if (model.image && model.image !== image) {
      await this._image.deleteImage(model.image);
    }
    if (image) {
      await this._image.changeImageUsed(image);
    }

    const category = await this.prismService.category.update({
      where: {id: id}, 
      data: {...updateCategoryDto, image}
    })

    return category
  }

  async updateCategoryOrders(updatePartDto: UpdateOrdersDto): Promise<any> {
    const { orderIds } = updatePartDto;
    const ordersErr = []
    const ordersSuccess = []

    await Promise.all(
      orderIds.map(async (orderId, index) => {
        const model = await this.prismService.category.findUnique({
          where: { id: orderId },
        });
        if (model) {
          this.prismService.category.update({
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
    const model = await this.prismService.category.findUnique({where: {id: id}})
    
    if(!model) throw new HttpException('No category', HttpStatus.NOT_FOUND)

    const category = await this.prismService.category.delete({where: {id: id}})

    if (category?.image) {
      await this._image.deleteImage(category.image);
    }
    return category
  }
}
