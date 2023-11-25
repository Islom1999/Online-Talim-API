import { IsBoolean, IsNotEmpty } from 'class-validator';

export class BlockStatusDto {
  @IsBoolean()
  @IsNotEmpty()
  isBlock: boolean;
}
