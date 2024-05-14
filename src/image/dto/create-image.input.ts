import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType() // Decorate with @InputType() to define as input type
export class CreateImageInput {
  @Field() // Decorate filename field with @Field() to expose in GraphQL schema
  @IsNotEmpty()
  @IsString()
  filename: string;

  @Field() // Decorate placeId field with @Field() to expose in GraphQL schema
  @IsNotEmpty()
  placeId: string;
}
