import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
    @ApiProperty({
        type: String,
        description: "Video link string",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    video?: string;

    @ApiProperty({
        type: String,
        description: "Title",
    })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({
        type: String,
        description: "Description",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    descr?: string;

    @ApiProperty({
        type: String,
        description: "Part id",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    partId?: string;
}
