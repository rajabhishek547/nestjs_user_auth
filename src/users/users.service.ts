import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosError } from 'axios';
import { Model } from 'mongoose';
import { catchError, firstValueFrom } from 'rxjs';
import * as FormData from 'form-data';
import { User, UserDocument } from './user.schema';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly httpService: HttpService,
  ) { }

  //create user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

    //Check user exist 
    async isUserExists(createUserDto: CreateUserDto): Promise<any> {
      const { email,lan_id } = createUserDto;
      const emailId = await this.userModel.findOne({ email });
      const lanid = await this.userModel.findOne({ lan_id });
      if (emailId||lanid) return true;
      else return false;
    }

    //Update User service
  async update(id: string, updateUserDto: UpdateUserDto) {
    const post = await this.userModel
      .findByIdAndUpdate(id, updateUserDto)
      .setOptions({ new: true })
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }
  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser(query: object ): Promise<User> {
    return this.userModel.findOne(query);
}

  async getMe(userId): Promise<User | undefined> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw 'User not found';
    }
    return user;
  }

}
