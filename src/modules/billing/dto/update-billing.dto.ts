import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class UpdateBillingDto {
    @ApiProperty({
        type: String,
        description: "order id number",
    })
    @IsNotEmpty()
    @IsString()
    userCourseId: string;

    @ApiProperty({
        type: Date,
        description: "Date sana",
    })
    @IsDate()
    @IsString()
    dateEnd: Date;   // kursni uzaytirish uchun
}
