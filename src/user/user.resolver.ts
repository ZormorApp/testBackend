import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }
  @Query(() => User)
  async user(@Args('email') email: string): Promise<User> {
    return this.userService.findOneByEmail(email);
  }
}
