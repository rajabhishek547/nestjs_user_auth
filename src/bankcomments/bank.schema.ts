import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BankDocument = HydratedDocument<Bank>;

@Schema()
export class Bank {
  @Prop()
  account_number: string;

  @Prop()
  verified_by: string;

  @Prop()
  bank_details: string[];
}

export const BankSchema = SchemaFactory.createForClass(Bank);