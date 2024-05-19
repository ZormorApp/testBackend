import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // console.log('hello hello');
    // console.log(username, password);
    const user = await this.authService.validateUser(username, password);
    // console.log('local local local');
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
