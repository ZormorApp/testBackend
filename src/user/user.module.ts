import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
<<<<<<< HEAD
  providers: [UserResolver, UserService],
  exports: [UserService],
=======
  controllers: [UserController],
  providers: [UserService, UserResolver],
>>>>>>> 7a63cc9b75354be07366ae2f2233412a9d3b2f98
})
export class UserModule {}