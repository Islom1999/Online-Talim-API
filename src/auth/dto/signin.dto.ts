import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
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
}
