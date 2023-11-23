import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {

  constructor(private prismService: PrismaService){}

  async create(createCategoryDto: CreateCategoryDto, image: Express.Multer.File) {
    let imageUrl:string
    if(image){
      imageUrl = image.filename
    }
    const category = await this.prismService.category.create({
      data: {...createCategoryDto, image: imageUrl}
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

  async update(id: string, updateCategoryDto: UpdateCategoryDto, image: Express.Multer.File) {
    let imageUrl:string
    if(image){
      imageUrl = image.filename
    }
    const category = await this.prismService.category.update({
      where: {id: id}, 
      data: {...updateCategoryDto, image: imageUrl}
    })

    return category
  }

  async remove(id: string) {
    const category = await this.prismService.category.delete({where: {id: id}})
    return category
  }
}
