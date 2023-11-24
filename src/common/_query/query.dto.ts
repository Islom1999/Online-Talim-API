import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class QueryIdDto {
    @ApiProperty({
        type: String,
        description: "Id",
    })
    @IsNotEmpty()
    @IsString()
    id: string 
}
