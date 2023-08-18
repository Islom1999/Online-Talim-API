import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BilingQuery } from './dto/query.dto';

@Injectable()
export class BillingService {

  constructor(private prismaService: PrismaService){}

  async getAllBilling(bilingQuery: BilingQuery) { 

    const userCourse = await this.prismaService.userCourse.findMany({
      where: {
        id: bilingQuery.id ? +bilingQuery.id : undefined,
        userId: bilingQuery.userId ? +bilingQuery.userId : undefined,
        courseId: bilingQuery.courseId ? +bilingQuery.courseId : undefined
      }
    })

    if(!userCourse[0]){
      throw new HttpException('malumotlar topilmadi', HttpStatus.NOT_FOUND)
    }

    return {status: 'ok', msg: "malumotlar topildi", data: userCourse};
  }
  
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

  async updateBillingAdmin(updateBillingDto:UpdateBillingDto) { 
    const {dateEnd, userCourseId} = updateBillingDto

    const userCourse = await this.prismaService.userCourse.update({
      where: {id: userCourseId},
      data: {
        dateEnd
      }
      })

    return {status: 'ok', msg: "Userga kurs tugash vaqti o'zgardi", data: userCourse};
  }

  async deleteBilingAdmin(id:number) { 
    const userCourse = await this.prismaService.userCourse.delete({where: {id: id},})
    if(!userCourse){
      throw new HttpException('unday kurs topilmadi', HttpStatus.NOT_FOUND)
    }
    return {status: 'ok', msg: "Userga kursi o'chirildi", data: userCourse};
  }

  
 
  
}
