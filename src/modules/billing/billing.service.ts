import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BillingService {

  constructor(private prismaService: PrismaService){}
  
  async createBillingFree(id:number, userId:number) {
    const cource = await this.prismaService.course.findUnique({where: {id}});
    if(! cource ){
      throw new HttpException('unday kurs topilmadi', HttpStatus.NOT_FOUND)
    }
    if(cource.paymentType !== 'Free'){
      throw new HttpException('bu kurs tekin emas', HttpStatus.BAD_REQUEST)
    }
    const userCourse = await this.prismaService.userCourse.create({
      data: {
        paymentType: 'Free', 
        userId, 
        courseId: id
      }
    })
    return {status: 'ok', msg: "Kursga obuna bo'lindi", data: userCourse};
  }

  // create(createBillingDto: CreateBillingDto) {
  //   return 'This action adds a new billing';
  // }

  // findAll() {
  //   return `This action returns all billing`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} billing`;
  // }

  // update(id: number, updateBillingDto: UpdateBillingDto) {
  //   return `This action updates a #${id} billing`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} billing`;
  // }
}
