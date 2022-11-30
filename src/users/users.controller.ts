import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  UploadedFile,
  UseInterceptors,
  Param,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  Res,
  HttpStatus,
  Put,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ParseObjectIdPipe } from 'src/app/pipes/parse-objectid.pipe';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { User } from './user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //Create user
  @Post('/create')
  async createUser(@Res() res, @Body() createUserDto: CreateUserDto) {
    const { ...userData }: any = createUserDto;
    if (await this.usersService.isUserExists(createUserDto)) {
      return res.status(HttpStatus.OK).json({
        message: "User with this creadential already registered",
      });
    }

    const user = await this.usersService.createUser({
      ...userData,
      username: userData.lan_id.toUpperCase()
    })
    return res.status(HttpStatus.OK).json({
      message: "User has been created successfully",
      user,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/update/:id')
  async updatePost(
    @Req() request,
    @Res() response,
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() post: UpdateUserDto
  ): Promise<User> {
    const updateUser = await this.usersService.update(id, {
      ...post,
    });
    return response.status(200).json(updateUser);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllUsers() {
    return this.usersService.getUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getMe(@Param() params) {
    return this.usersService.getMe(params.id);
  }
}

