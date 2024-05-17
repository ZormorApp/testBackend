import { InputType, Field, Int } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as Upload from 'graphql-upload/Upload.js'
import { BaseEntity } from 'src/base-entity';

@InputType()
export class UpdatePlaceDto extends BaseEntity {
// @Field(()=> Int)
// @IsUUID()
// id: number;

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

  @Field(() => GraphQLUpload, {nullable: true, description: 'image file'}) 
  imageFile?: Upload
}
