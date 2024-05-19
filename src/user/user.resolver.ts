import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from './models/user.interface';
import { Roles } from './user.decorator';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  @Roles(UserRole.ADMIN)
  async createUser(@Args('createUserDto') createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return await this.userService.findOneUser(id);
  }

  @Mutation(() => User)
  @Roles(UserRole.ADMIN)
  async updateUser(@Args('updateUserDto') updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userService.updateUser(updateUserDto.id, updateUserDto);
  }

  @Mutation(() => Boolean)
  @Roles(UserRole.ADMIN)
  async removeUser(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    await this.userService.remove(id)
    return true;
  }
}