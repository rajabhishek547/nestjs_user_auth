import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmailDocument = HydratedDocument<Email>;

@Schema()
export class Email {
  @Prop()
  email: string;

  @Prop()
  verified_by: string;

  @Prop()
  email_details: string[];
}

export const EmailSchema = SchemaFactory.createForClass(Email);