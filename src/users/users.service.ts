import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

//Create User service
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
//Update User service
  async update(id: string, updateUserDto: UpdateUserDto) {
    const post = await this.userModel
      .findByIdAndUpdate(id, updateUserDto)
      .setOptions({ overwrite: true, new: true })
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  
  async findByUsername(username: string): Promise<UserDocument> {
    return this.userModel.findOne({ username }).exec();
  }

  //Check user exist 
  async isUserExists(createUserDto: CreateUserDto): Promise<any> {
    const { email } = createUserDto;
    const user = await this.userModel.findOne({ email });
    if (user) return true;
    else return false;
  }

     async getUser(query: object ): Promise<User> {
        return this.userModel.findOne(query);
    }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: any): Promise<User[]> {
    return this.userModel.findOne({ id });
  }

}