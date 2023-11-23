import { ApiProperty } from "@nestjs/swagger"
import { PaymentType } from "@prisma/client"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateCourseDto {
    @ApiProperty({
        type: String,
        description: "Image file",
    })
    @IsNotEmpty()
    @IsString()
    image:  string

    @ApiProperty({
        type: String,
        description: "Title",
    })
    @IsNotEmpty()
    @IsString()
    title:  string 

    @ApiProperty({
        type: String,
        description: "Description",
    })
    @IsNotEmpty()
    @IsString()
    descr:  string

    @ApiProperty({
        type: String,
        description: "Author",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    author?: string

    @ApiProperty({
        type: String,
        description: "Amount number and string",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    amount?: string|number      // numberString

    @ApiProperty({
        type: String,
        description: "Description",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    categoryId?: string  // numberString

    @ApiProperty({
        type: String,
        description: "Payment type ",
    })
    @IsNotEmpty()
    @IsString()
    paymentType: PaymentType
}
