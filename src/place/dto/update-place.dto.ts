import { InputType, Field, Int } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
// import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class UpdatePlaceDto {
@Field(()=> Int)
@IsUUID()
id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  location?: string;

  @Field({ nullable: true })
  latitude?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field({ nullable: true })
  hours?: string;

  // @Field(() => GraphQLUpload)
  // file?: Promise<GraphQLUpload>;
}
