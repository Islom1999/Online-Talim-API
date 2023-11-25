import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class RoleIdDto {
  @IsString()
  @IsNotEmpty()
  role_id: string;

  @IsBoolean()
  @IsNotEmpty()
  isBlock: boolean;
}
