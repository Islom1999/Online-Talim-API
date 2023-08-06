import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    image:  string
    title:  string 
    descr:  string
    author?: string
    amount?: number | string
    categoryId?: number | string
}
