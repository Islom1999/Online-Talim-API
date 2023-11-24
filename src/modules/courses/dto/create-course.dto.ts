import { ApiProperty } from "@nestjs/swagger"
import { PaymentType } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCourseDto {
    @ApiProperty({
        type: String,
        description: "Image name string",
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
    authorName?: string

    @ApiProperty({
        type: String,
        description: "Amount number and string",
        required: false
    })
    @IsNotEmpty()
    @IsNumber()
    amount?: number      // numberString

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
    @IsEnum(PaymentType)
    paymentType: PaymentType
}
