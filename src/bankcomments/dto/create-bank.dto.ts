import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateBankDto {

  @IsNotEmpty()
  verified_by: string;
  
  @IsNotEmpty()
  account_number:string;
  
  @IsNotEmpty()
  bank_details:string[];
}