import { InputType, Field } from '@nestjs/graphql';
// import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class UpdatePlaceDto {
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
