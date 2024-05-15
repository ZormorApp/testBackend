import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.role = createUserDto.role;
    return await this.userRepository.save(user);
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw (`User with ID ${id} not found`);
    }
    return user;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    return this.userRepository.save(user)
  }

  removeUser(id: number): Promise<{affected?: number}> {
    return  this.userRepository.delete(id);
  }
}
