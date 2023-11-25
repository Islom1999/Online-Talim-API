import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class QueryIdDto {
  @ApiProperty({
    type: String,
    description: 'Id',
  })
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class QueryDTO {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  page?: number | string;

  @IsOptional()
  limit?: number | string;
}
