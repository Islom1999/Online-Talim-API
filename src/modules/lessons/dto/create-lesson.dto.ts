import { ApiProperty } from "@nestjs/swagger";

export class CreateLessonDto {
    @ApiProperty({
        type: String,
        description: "Video link string",
        required: false
    })
    video?: string;

    @ApiProperty({
        type: String,
        description: "Title",
    })
    title: string;

    @ApiProperty({
        type: String,
        description: "Description",
        required: false
    })
    descr?: string;

    @ApiProperty({
        type: Number,
        description: "Part id",
        required: false
    })
    partId?: number;
}
