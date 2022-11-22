import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MobileDocument = HydratedDocument<Mobile>;

@Schema()
export class Mobile {
  @Prop()
  mobile: string;
 
  @Prop()
  email: string;

  @Prop()
  verified_by: string;

  @Prop()
  mobile_details: string[];
}

export const MobileSchema = SchemaFactory.createForClass(Mobile);