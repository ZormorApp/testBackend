import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';


@InputType()
export class LoginUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @Field()
  @IsNotEmpty()
  @Length(8, 20, { message: 'Password must be between 6 and 100 characters' })
  password: string;
}
