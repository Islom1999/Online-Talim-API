import { ApiProperty } from "@nestjs/swagger"

export class UpdateProfileDto {
    @ApiProperty({
        type: String,
        description: "Image file",
        required: false
    })
    image?: string
    
    @ApiProperty({
        type: String,
        description: "Fullname",
        required: false
    })
    fullname?: string

    @ApiProperty({
        type: String,
        description: "Tel raqam",
        required: false
    })
    phone?:string
}
