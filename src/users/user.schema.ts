import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
 @Prop()
  fullname: string;

 @Prop()
  username: string;

 @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  refreshToken: string;

 @Prop()
  password_change: boolean;
  
 @Prop()
 is_active: boolean;

 @Prop()
  usergroup: string;

 @Prop()
  designation: string;

 @Prop()
  gender: string;

 @Prop()
  pilot_user: boolean;

  @Prop()
  age: number;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);