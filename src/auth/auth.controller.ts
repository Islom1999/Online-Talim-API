import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, CreateClientDto, VerifyEmailDto } from './dto';
import { Tokens } from './types';
import {
  GetCurrentUser,
  GetCurrentUserId,
  Public,
} from 'src/common/decorators';
import { RtGuard } from 'src/common/guards';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  // constructor(private authService: AuthService) {}
  // @Public()
  // @Post('signup/local')
  // @HttpCode(HttpStatus.CREATED)
  // signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
  //   return this.authService.signupLocal(dto);
  // }
  // @Public()
  // @Post('signin/local')
  // @HttpCode(HttpStatus.OK)
  // signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
  //   return this.authService.signinLocal(dto);
  // }
  // @Public()
  // @UseGuards(AuthGuard('google'))
  // @Get('signin/google')
  // @HttpCode(HttpStatus.OK)
  // signinGoogle() {
  //   return { msg: 'Google Sign In page' };
  //   // return this.authService.signGoogle(dto);
  // }
  // @Post('logout')
  // @HttpCode(HttpStatus.OK)
  // logout(@GetCurrentUserId() userId: string): Promise<boolean> {
  //   return this.authService.logout(userId);
  // }
  // @Public()
  // @UseGuards(RtGuard)
  // @Post('refresh')
  // @HttpCode(HttpStatus.OK)
  // refreshTokens(
  //   @GetCurrentUserId() userId: string,
  //   @GetCurrentUser('refreshToken') refreshToken: string,
  // ): Promise<Tokens> {
  //   return this.authService.refreshTokens(userId, refreshToken);
  // }
  // // Clinet Google Authentication
  // @Public()
  // @UseGuards(AuthGuard('google'))
  // @Get('/client/google')
  // @HttpCode(HttpStatus.OK)
  // googleAuth(@Req() req): any {
  //   req;
  //   return { message: 'Google authentication' };
  // }
  // @Public()
  // @UseGuards(AuthGuard('google'))
  // @Get('/client/google/callback')
  // @HttpCode(HttpStatus.OK)
  // googleAuthRedirect(@Req() req): any {
  //   return this.authService.googleAuthRedirect(req.user);
  // }
  // // Client Facebook Authentication
  // @Public()
  // @Get('/client/facebook')
  // @UseGuards(AuthGuard('facebook'))
  // facebookAuth(): any {
  //   return { message: 'Facebook authentication' };
  // }
  // @Public()
  // @Get('/client/facebook/callback')
  // @UseGuards(AuthGuard('facebook'))
  // async facebookAuthRedirect(@Req() req): Promise<any> {
  //   return this.authService.facebookAuthRedirect(req.user);
  // }
  // // client register with email pocha
  // @Public()
  // @Post('/client/register')
  // async registerClient(@Body() client: CreateClientDto): Promise<any> {
  //   return this.authService.registerClient(client);
  // }
  // @Public()
  // @Post('/client/register/verify')
  // async verifyEmailClient(@Body() verifyDto: VerifyEmailDto): Promise<any> {
  //   return this.authService.verifyEmailClient(verifyDto);
  // }
  // // reset password
  // @Public()
  // @Post('/client/reset-password')
  // async requestPasswordReset(@Body() body: { email: string }) {
  //   return this.authService.requestPasswordReset(body.email);
  // }
  // @Public()
  // @Post('/client/reset-password/new-password')
  // async resetPassword(
  //   @Body() body: { email: string; code: string; password: string },
  // ) {
  //   return this.authService.resetPassword(body.email, body.code, body.password);
  // }
  // // logout and refresh token
  // @Post('/client/logout')
  // @HttpCode(HttpStatus.OK)
  // logoutClient(@GetCurrentUserId() userId: string): Promise<boolean> {
  //   return this.authService.logoutClient(userId);
  // }
  // @Public()
  // @UseGuards(RtGuard)
  // @Post('/client/refresh')
  // @HttpCode(HttpStatus.OK)
  // refreshTokensClient(
  //   @GetCurrentUserId() userId: string,
  //   @GetCurrentUser('refreshToken') refreshToken: string,
  // ): Promise<Tokens> {
  //   return this.authService.refreshTokensClient(userId, refreshToken);
  // }
}
