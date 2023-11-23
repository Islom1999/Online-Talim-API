import { PartialType } from '@nestjs/mapped-types';
import { CreatePartDto } from './create-part.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePartDto extends PartialType(CreatePartDto) {
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
        required: false
    })
    @IsNotEmpty()
    @IsString()
    descr?: string

    @ApiProperty({
        type: String,
        description: "Course id",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    courseId?: string
}
