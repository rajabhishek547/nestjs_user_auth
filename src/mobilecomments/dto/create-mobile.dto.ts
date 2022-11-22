import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateMobileDto {
  @IsNotEmpty()
  mobile: string;

  @IsNotEmpty()
  verified_by: string;
  
  @IsNotEmpty()
  email:string;
  
  @IsNotEmpty()
  mobile_details:string[];
}