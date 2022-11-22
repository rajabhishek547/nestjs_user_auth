import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePanDto {

  @IsNotEmpty()
  verified_by: string;
  
  @IsNotEmpty()
  pan_number:string;
  
  @IsNotEmpty()
  pan_details:string[];
}