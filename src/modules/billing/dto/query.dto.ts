import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class BilingQuery {
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
        type: String,
        description: "order id number",
    })
    @IsNotEmpty()
    @IsString()
    id: string
}

