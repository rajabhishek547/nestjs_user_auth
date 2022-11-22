import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmailDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  verified_by: string;
  
  @IsNotEmpty()
  email_details:string[];
}