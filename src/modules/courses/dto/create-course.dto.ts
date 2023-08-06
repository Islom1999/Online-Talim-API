export class CreateCourseDto {
    image:  string
    title:  string 
    descr:  string
    author?: string
    amount?: string|number      // numberString
    categoryId?: string|number  // numberString
}
