import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  lan_id: string;

  @IsNotEmpty()
  fullname: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
  
  @IsNotEmpty()
  password_change: boolean;

  @IsNotEmpty()
  is_active: boolean;

  @IsNotEmpty()
  @IsNotEmpty()
  usergroup: string;

  @IsNotEmpty()
  pilot_user: boolean;

  @IsNotEmpty()
  created_at:Date;

  @IsNotEmpty()
  updated_at:Date

}
export class UpdateUserDto extends PartialType(
  CreateUserDto,
) {}