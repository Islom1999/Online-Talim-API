import { PartialType } from '@nestjs/mapped-types';
import { CreatePartDto } from './create-part.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePartDto extends PartialType(CreatePartDto) {
    @ApiProperty({
        type: String,
        description: "Title",
    })
    title: string 

    @ApiProperty({
        type: String,
        description: "Description",
        required: false
    })
    descr?: string

    @ApiProperty({
        type: Number,
        description: "Course id",
        required: false
    })
    courseId?: number
}
