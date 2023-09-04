import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @ApiProperty({
        type: String,
        description: "Image file",
    })
    image?: string

    @ApiProperty({
        type: String,
        description: "Title",
    })
    title: string 

    @ApiProperty({
        type: String,
        description: "Description",
    })
    descr?: string
}
