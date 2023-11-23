import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePasswordDto {
  @ApiProperty({
    type: String,
    description: 'user password', 
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UpdateClientPasswordDto {
  @ApiProperty({
    type: String,
    description: 'user old password', 
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    description: 'user new password', 
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  newPassword: string;
}
