import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreatePlaceInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  @Length(3, 200)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  location: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  latitude: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  longititude: string;

  @IsNotEmpty()
  @Field()
  open_hours: string;
}
