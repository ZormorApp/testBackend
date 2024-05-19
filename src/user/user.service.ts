import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const { username, password } = createUserInput;
    const user = this.usersRepository.create({ username, password });
    try {
      await this.usersRepository.save(user);
      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists.');
      } else {
        throw new InternalServerErrorException();
      }
    }

    // console.log(this.users);
    // return user;
  }

  async findAll() {
    // protect with jwt
    return await this.usersRepository.find();
  }

  async findOne(username: string) {
    // protect with jwt
    // console.log(username);
    const user = await this.usersRepository.findOne({ where: { username } });
    // console.log(user);
    if (!user) {
      return null;
    }
    return user;
  }
  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
