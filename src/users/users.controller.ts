import { Controller, Get, Post, Body, Param, Res, HttpStatus, Put } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/create')
  async create(@Res() res, @Body() createUserDto: CreateUserDto) {
    const {...userData }: any = createUserDto;
    if (await this.usersService.isUserExists(createUserDto)) {
      return res.status(HttpStatus.OK).json({
        message: "User already registered",
      });
    }

    const user = await this.usersService.create({
      ...userData,
      username:userData.fullname.replace(' ','').toLowerCase()+userData.usergroup
      
    })
    return res.status(HttpStatus.OK).json({
      message: "User has been created successfully",
      user,
    });
  }
  
  @Put('/update/:id')
  async updatePost(@Param() { id }: any, @Body() post: UpdateUserDto) {
    return this.usersService.update(id, post);
  }

  @Get()
  list() {
    return this.usersService.findAll();
  }
}