import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PanDocument = HydratedDocument<Pan>;

@Schema()
export class Pan {
  @Prop()
  pan_number: string;

  @Prop()
  verified_by: string;

  @Prop()
  pan_details: string[];
}

export const PanSchema = SchemaFactory.createForClass(Pan);