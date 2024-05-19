import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field()
  @IsEmail()
  @IsNotEmpty()
  username: string;


  @Field()
  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
