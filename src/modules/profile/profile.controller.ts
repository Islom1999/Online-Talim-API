import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file.upload';
import { GetCurrentUserId } from 'src/common/decorators';
import { ChangePasswordDto } from './dto/change-password.dto';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
  ) {}

  @HttpCode(200)
  @Roles('User')
  @UseGuards(RolesGuard)
  @Get()
  findOne(@GetCurrentUserId() id: number,) {
    return this.profileService.findOne(id);
  }

  @HttpCode(200)
  @Roles('User')
  @UseGuards(RolesGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName
      }),
      fileFilter: imageFileFilter
    })  
  )
  @Patch('update')
  update(
    @GetCurrentUserId() id: number,
    @Body() updateProfileDto: UpdateProfileDto,
    @UploadedFile() image: Express.Multer.File
  ) {
    return this.profileService.update(id, updateProfileDto, image);
  }

  @HttpCode(200)
  @Roles('User')
  @UseGuards(RolesGuard)
  @Patch('password')
  changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @GetCurrentUserId() id: number
  ) {
    return this.profileService.changePassword(id, changePasswordDto);
  }

  @HttpCode(200)
  @Roles('User')
  @UseGuards(RolesGuard)
  @Get('courses')
  getUserCourses(
    @GetCurrentUserId() id: number
  ) {
    return this.profileService.getUserCourses(id);
  }
}
