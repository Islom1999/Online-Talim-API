import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {

  constructor(private prismService: PrismaService){}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prismService.category.create({data: createCategoryDto})
    return {code: 201, data: category};
  }

  async findAll() {
    const category = await this.prismService.category.findMany()
    if(!category[0]){
      throw new HttpException('No categories', HttpStatus.NOT_FOUND)
    }
    return {code: 200, data: category};
  }

  async findOne(id: number) {
    const category = await this.prismService.category.findUnique({where: {id: id}})
    if(!category){
      throw new HttpException('No category', HttpStatus.NOT_FOUND)
    }
    return {code: 200, data: category};
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.prismService.category.update({where: {id: id}, data: updateCategoryDto})

    return {code: 200, data: category};
  }

  async remove(id: number) {
    const category = await this.prismService.category.delete({where: {id: id}})
    
    return {code: 200, data: category};
  }
}
