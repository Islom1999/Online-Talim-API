import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    type: String,
    description: "unique bo'lgan email",
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
    description: "parol",
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    description: "ism familiya",
  })
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @ApiProperty({
    type: String,
    description: "tel raqam",
    required: false,
  })
  // @IsNotEmpty()
  // @IsString()
  phone: string;
}
