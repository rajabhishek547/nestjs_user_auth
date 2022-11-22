import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    console.log(username, password);
    const user = await this.usersService.getUser({ username, password });

    return user ?? null;
  }

  async loginWithCredentials(user: User) {
    const payload = { username: user.username };
    if(user.is_active){
      return {
        email:user.email,
        username: user.username,
        userId: user._id,
        is_active:user.is_active,
        access_token: this.jwtService.sign(payload),
        expiredAt: Date.now() + 60000,
      };
    }
    else{
      return {message:"User with this credential is currently disable from admin"}
    }
   
  }
}
