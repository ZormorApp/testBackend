import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsStrongPassword, Length, Matches, MinLength } from 'class-validator';
import { UserRole } from '../models/user.interface';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{6,20}$/;

@InputType()
export class CreateUserDto {
  @Field()
  @IsNotEmpty()
  @IsEmail(null, {message: 'Please provide valid Email.'})
  @MinLength(10, {message: 'Name must have at least 10 characters'})
  email: string;

  @Field()
  @IsStrongPassword()
  @IsNotEmpty()
  @Length(6, 20)
  @Matches(passwordRegEx, {message: `Password must contain a minimum of 8 characters and maximum of 20 characters, at least one uppercase, one lowercase, one number and one special character`})
  password: string;

  @Field(()=> UserRole, {nullable: true})
  role: UserRole | null;
}