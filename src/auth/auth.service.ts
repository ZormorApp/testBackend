import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginUserInput } from './dto/login-user.input';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    // console.log('heloo heloo helooo');
    // console.log(`before using ${username}`)
    const user = await this.userService.findOne(username);
    // console.log(`User validateUser ${user}`);
    // console.log(password);

    const valid = await bcrypt.compare(password, user?.password);
    // console.log(`valid is ${valid}`)
    if (user && valid) {
      const { password, ...result } = user;

      return result;
    }

    // console.log('not found not found');

    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user: user,
    };
  }

  async signup(loginUserInput: LoginUserInput) {
    // console.log("Heloo check here");
    const user = await this.userService.findOne(loginUserInput.username);
    // console.log(user);
    // console.log('not found')

    if (user) {
      throw new Error('User already exists!');
    }

    const password = await bcrypt.hash(loginUserInput.password, 10);

    return this.userService.create({
      ...loginUserInput,
      password,
    });
  }
}
