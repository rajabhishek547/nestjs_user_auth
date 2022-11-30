import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ username });
    if (!user) return null;
    if (!user) {
        throw new NotAcceptableException('could not find the user');
    }
    if (user) {
        return user;
    }
    return null;
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.username };

    return {
      username: user.username,
      is_active: user.is_active,
      access_token: this.jwtService.sign(payload),
      expiredAt: Date.now() + 60000,
    };
  }
}
