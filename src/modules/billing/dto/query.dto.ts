import { ApiProperty } from "@nestjs/swagger"

export class BilingQuery {
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
        type: Number,
        description: "order id number",
    })
    id: number
}

