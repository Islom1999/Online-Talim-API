import { Permission } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class RoleDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsEnum(Permission, {each: true})
    @IsNotEmpty()
    permissions: Permission[];
}
