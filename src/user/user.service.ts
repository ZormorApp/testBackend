import { Injectable, NotFoundException } from '@nestjs/common';
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
  
  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const user: User = new User();
  //   user.email = createUserDto.email;
  //   user.password = createUserDto.password;
  //   user.role = createUserDto.role;
  //   return await this.userRepository.save(user);
  // }

  async create(createUserDto: CreateUserDto): Promise<User> {
const user = this.userRepository.create(createUserDto)
    return await this.userRepository.save(user);
  }

 async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw (`User with ID ${id} not found`);
    }
    return user;
  }

  // async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  //   const user: User = new User();
  //   user.email = updateUserDto.email;
  //   user.password = updateUserDto.password;
  //   return this.userRepository.save(user)
  // }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: {email} });
    if (!user) {
      throw new Error (`User with email ${email} not found`)
    }
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>
 {
  await this.userRepository.update(id, updateUserDto)
  const updateUser = await this.userRepository.findOne({where: {id}})
  if (!updateUser) {
    throw new NotFoundException(`User with ID ${id} not found`)
  }
  return updateUser
  // return this.findOneUser(id)
 }


 async remove(id: number): Promise<void> {
  const result = await this.userRepository.delete(id);
  if (result.affected === 0) {
    throw new NotFoundException(`User with ID ${id} not found`);
  }
}
}