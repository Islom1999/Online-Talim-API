import { ApiProperty } from "@nestjs/swagger";

export class UpdateBillingDto {
    @ApiProperty({
        type: Number,
        description: "order id number",
    })
    userCourseId: number;

    @ApiProperty({
        type: Date,
        description: "Date sana",
    })
    dateEnd: Date;   // kursni uzaytirish uchun
}
