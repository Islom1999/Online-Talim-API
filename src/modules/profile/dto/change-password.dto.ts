import { ApiProperty } from "@nestjs/swagger";

export class ChangePasswordDto {
    @ApiProperty({
        type: String,
        description: "Old Password",
    })
    oldPassword: string;

    @ApiProperty({
        type: String,
        description: "New Password",
    })
    newPassword: string;
}
