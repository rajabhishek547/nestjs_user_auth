import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  lan_id: string;

  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  password_change: boolean;
  
  @Prop({ required: true })
 is_active: boolean;

 @Prop({ required: true })
  usergroup: string;

  @Prop({ required: true })
  pilot_user: boolean;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);