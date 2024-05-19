import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserRole } from './models/user.interface';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @Mutation(() => User)
  // createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.usersService.create(createUserInput);
  // }

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  // findAll(@Context() context) {
  async findAll(@Context() context) {
    console.log(context.req.user);
    const username = context.req.user.username;

    const user = await this.userService.findOne(username);
    console.log(user);
    if (!user || user.role != UserRole.ADMIN) {
      throw new UnauthorizedException('Unauthorize user ');
    }

    // return this.usersService.findAll();
    // console.log(context.req.user);
    // if (context.req.user.role === ) {
    //   return this.userService.findAll();
    // } else {
    //   throw new UnauthorizedException('User is not authorized');
    // }
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(JwtAuthGuard)
  async findOne(@Args('username') username: string, @Context() context: any) {
    console.log(context.req.user);
    const username2 = context.req.user.username;
    console.log(`username ${username}`);
    const user = await this.userService.findOne(username2);
    console.log(user);
    if (username === username2 || user.role === UserRole.ADMIN) {
      return this.userService.findOne(username);
    } else {
      throw new UnauthorizedException('User is not authorized');
    }
  }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
