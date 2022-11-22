import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String },
  password_change: { type: String },
  is_active: { type: Boolean },
  usergroup: { type: String },
  designation: { type: String },
  gender: { type: String },
  pilot_user: { type: Boolean },
  age: { type: Number },
});

export interface User {
  _id: string;
  email:string;
  fullname: string;
  username: string;
  password: string;
  password_change:boolean;
  is_active:boolean;
  usergroup:string;
  designation:string;
  gender:string;
  pilot_user:boolean;
  age:number
}
