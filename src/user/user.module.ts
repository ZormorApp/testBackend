import { Module } from '@nestjs/common';
import { UserService } from './user.service';
// import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
  exports: [UserService],
  // controllers: [UserController],
  // providers: [UserService, UserResolver],
})
export class UserModule {}
