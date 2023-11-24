import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageService } from '../image/image.service';

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
