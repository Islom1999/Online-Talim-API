import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateBillingDto {
    @ApiProperty({
        type: String,
        description: "user id number",
    })
    @IsNotEmpty()
    @IsString()
    userId: string

    @ApiProperty({
        type: String,
        description: "curse id number",
    })
    @IsNotEmpty()
    @IsString()
    courseId: string

    @ApiProperty({
        type: Date,
        description: "Date",
        required: false,
    })
    @IsDate()
    @IsString()
    dateStart? : Date   // kiritish majburiy emas
}

