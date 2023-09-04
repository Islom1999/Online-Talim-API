import { ApiProperty } from "@nestjs/swagger"

export class CreateBillingDto {
    @ApiProperty({
        type: Number,
        description: "user id number",
    })
    userId: number

    @ApiProperty({
        type: Number,
        description: "curse id number",
    })
    courseId: number

    @ApiProperty({
        type: Date,
        description: "Date",
        required: false,
    })
    dateStart? : Date   // kiritish majburiy emas
}

