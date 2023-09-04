import { ApiProperty } from "@nestjs/swagger"

export class CreateCategoryDto {
    @ApiProperty({
        type: String,
        description: "Image file",
    })
    image?: string

    @ApiProperty({
        type: String,
        description: "Title",
    })
    title: string 

    @ApiProperty({
        type: String,
        description: "Description",
    })
    descr?: string
}
