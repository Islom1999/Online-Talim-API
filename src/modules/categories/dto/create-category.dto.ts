import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

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
    @IsNotEmpty()
    @IsString()
    title: string 

    @ApiProperty({
        type: String,
        description: "Description",
    })
    @IsOptional()
    @IsString()
    descr?: string
}
