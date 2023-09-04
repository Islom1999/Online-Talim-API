import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { PaymentType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @ApiProperty({
        type: String,
        description: "Image file",
    })
    image:  string

    @ApiProperty({
        type: String,
        description: "Title",
    })
    title:  string 

    @ApiProperty({
        type: String,
        description: "Description",
    })
    descr:  string

    @ApiProperty({
        type: String,
        description: "Author",
        required: false
    })
    author?: string

    @ApiProperty({
        type: String,
        description: "Amount number and string",
        required: false
    })
    amount?: string|number      // numberString

    @ApiProperty({
        type: String,
        description: "Description",
        required: false
    })
    categoryId?: string|number  // numberString

    @ApiProperty({
        type: String,
        description: "Payment type ",
    })
    paymentType: PaymentType
}
