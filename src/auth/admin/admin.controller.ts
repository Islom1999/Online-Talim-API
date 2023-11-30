import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import {
  GetCurrentUser,
  GetCurrentUserId,
  Public,
} from 'src/common/decorators';
import { AuthDto, UpdateClientPasswordDto } from '../dto';
import { Tokens } from '../types';
import { AuthGuard } from '@nestjs/passport';
import { RtGuard } from 'src/common/guards';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth Admin')
@Controller('auth')
export class AdminController {
  constructor(private authService: AdminService) {}

  @Public()
  @Post('signup/local') 
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }
 
  @Public()
  @Post('signin/local')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: string): Promise<boolean> {
    return this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authService.refreshTokens(userId, refreshToken);
  }

  // update pasword user
  // reset password
  @Post('/update-password')
  async updateClientPassword(
    @Body() dto: UpdateClientPasswordDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.authService.updateClientPassword(userId, dto);
  }

  @Public()
  @Post('/reset-password')
  async requestPasswordReset(@Body() body: { email: string }) {
    return this.authService.requestPasswordReset(body.email);
  }

  @Public()
  @Post('/reset-password/new-password')
  async resetPassword(
    @Body() body: { email: string; code: string; password: string },
  ) {
    return this.authService.resetPassword(body.email, body.code, body.password);
  }
}
