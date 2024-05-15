import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsStrongPassword, Length, Matches, MinLength } from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

@InputType()
export class CreateUserDto {
  @Field()
  @IsNotEmpty()
  @IsEmail(null, {message: 'Please provide valid Email.'})
  @MinLength(2, {message: 'Name must have at least 10 characters'})
  email: string;

  @Field()
  @IsStrongPassword()
  @IsNotEmpty()
  @Length(8, 50)
  @Matches(passwordRegEx, {message: `Password must contain a minimum of 8 characters and maximum of 20 characters, at least one uppercase, one lowercase, one number and one special character`})
  password: string;
}