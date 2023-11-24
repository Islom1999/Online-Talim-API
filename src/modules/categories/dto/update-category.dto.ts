import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @ApiProperty({
        type: String,
        description: "Image name string",
    })
    @IsNotEmpty()
    @IsString()
    image: string

    @ApiProperty({
        type: String,
        description: "Title",
    })
    @IsNotEmpty()
    @IsString()
    title: string 

    @ApiProperty({
        type: String,
        description: "Description",
    })
    @IsOptional()
    @IsString()
    descr?: string
}
