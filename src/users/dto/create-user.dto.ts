import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
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
  refreshToken?: string;

  @IsNotEmpty()
  password_change: boolean;

  @IsNotEmpty()
  is_active: boolean;

  @IsNotEmpty()
  @IsNotEmpty()
  usergroup: string;

  @IsNotEmpty()
  designation: string;

  @IsNotEmpty()
  gender: string;
 
  @IsNotEmpty()
  hashedPassword: string;

  @IsNotEmpty()
  pilot_user: boolean;

  @IsNotEmpty()
  age: number;
}

export class UpdateUserDto {
  @IsNotEmpty()
  @IsNotEmpty()
  fullname: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password_change: boolean;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  is_active: boolean;

  @IsNotEmpty()
  @IsNotEmpty()
  usergroup: string;

  @IsNotEmpty()
  designation: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  pilot_user: boolean;

  @IsNotEmpty()
  age: number;
}