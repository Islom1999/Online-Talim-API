import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    type: String,
    description: 'user name or fullname',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    type: String,
    description: 'user email',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'user password',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class CreateClientDto {
  @ApiProperty({
    type: String,
    description: 'user first name',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({
    type: String,
    description: 'user last name',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({
    type: String,
    description: 'user email',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'user password',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class VerifyEmailDto {
  @ApiProperty({
    type: String,
    description: 'user email',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'verify send email code', 
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  code: string;
}

export class loginClientDto {
  @ApiProperty({
    type: String,
    description: 'email', 
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'user password', 
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
