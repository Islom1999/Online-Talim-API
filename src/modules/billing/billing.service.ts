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

  async createBillingAdmin(createBillingdto:CreateBillingDto) { 
    const {userId, courseId} = createBillingdto

    const dateStart = createBillingdto.dateStart ? createBillingdto.dateStart : new Date()
    const dateEnd = new Date()
    let userCourse

    const user = await this.prismaService.user.findUnique({where: {id: userId}});
    if(! user ){
      throw new HttpException('unday user topilmadi', HttpStatus.NOT_FOUND)
    } 

    const course = await this.prismaService.course.findUnique({where: {id: courseId}});
    if(! course ){
      throw new HttpException('unday kurs topilmadi', HttpStatus.NOT_FOUND)
    }

    if(course.paymentType == 'Free' || course.paymentType == 'OneTime'){
      userCourse = await this.prismaService.userCourse.create({
        data: {
          paymentType: course.paymentType,  
          userId, 
          courseId
        }
      })
      .catch((err) => {
        throw new HttpException('user kursga biriktirilgan', HttpStatus.BAD_REQUEST)
      })
    }else{
      switch(course.paymentType){
        case 'Monthly': dateEnd.setMonth(+dateEnd.getMonth() + 1); break;
        case 'TwoMonth': dateEnd.setMonth(+dateEnd.getMonth() + 2); break;
        case 'ThreeMonth': dateEnd.setMonth(+dateEnd.getMonth() + 3); break;
        case 'SixMonth': dateEnd.setMonth(+dateEnd.getMonth() + 6); break;
        case 'NineMonth': dateEnd.setMonth(+dateEnd.getMonth() + 9); break;
        case 'OneYear': dateEnd.setMonth(+dateEnd.getMonth() + 12); break; 
      }
      userCourse = await this.prismaService.userCourse.create({
        data: {
          paymentType: course.paymentType, 
          userId, 
          courseId,
          dateStart,
          dateEnd,
        }
      })
    }
    return {status: 'ok', msg: "Userga kurs qo'shildi", data: userCourse};
  }

  
}
