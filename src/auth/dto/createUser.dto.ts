import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'user name or full name', 
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

  @ApiProperty({
    type: Boolean,
    description: 'user status isBlock', 
    required: false,
  })
  @Optional()
  @IsBoolean()
  isBlock?: boolean;

  @ApiProperty({
    type: String,
    description: 'user role this is role table id', 
    required: false,
  })
  @IsOptional()
  @IsString()
  role_id?: string;
}
