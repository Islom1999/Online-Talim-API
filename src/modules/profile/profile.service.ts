import { ForbiddenException, Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangePasswordDto} from './dto/change-password.dto';
import * as argon from 'argon2';

@Injectable()
export class ProfileService {

  constructor(
    private prismService: PrismaService,
  ){}
  
  async findOne(id: number) {
    const user = await this.prismService.user.findUnique({
      where: {id: id}, 
    })
    user.hash = null
    user.hashedRt = null
    return {code: 200, data: user};
  }

  async update(id: number, updateProfileDto: UpdateProfileDto, image: Express.Multer.File) {
    let imageUrl:string
    if(image){
      imageUrl = image.filename
    }
    const user = await this.prismService.user.update({
      where: {id: id}, 
      data: {
        fullname: updateProfileDto.fullname, 
        phone: updateProfileDto.phone, 
        image: imageUrl
      }
    })
    user.hash = null;
    user.hashedRt = null
    return {code: 200, data: user};
  }

  async changePassword(id: number, changePasswordDto: ChangePasswordDto) {
    const {oldPassword, newPassword} = changePasswordDto

    const user = await this.prismService.user.findUnique({
      where: {id: id}, 
    })

    const passwordMatches = await argon.verify(user.hash, changePasswordDto.oldPassword);
    if (!passwordMatches) throw new ForbiddenException('Access Denied');
    
    const hash = await argon.hash(newPassword);

    const changedPasswordUser = await this.prismService.user.update({
      where: {id: id},
      data: {hash}
    })

    changedPasswordUser.hash = null
    changedPasswordUser.hashedRt = null

    return {code: 200, data: changedPasswordUser, message: "User Chanege password successfully"}; 
  }
}
