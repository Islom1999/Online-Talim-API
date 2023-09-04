import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
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
