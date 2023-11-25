import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty } from "class-validator";

export class UpdateOrdersDto{
    @ApiProperty({
        type: String,
        description: "array in id string",
    })
    @IsNotEmpty()
    @IsArray()
    orderIds: string[]
}