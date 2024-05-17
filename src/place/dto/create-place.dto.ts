import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as Upload from 'graphql-upload/Upload.js'
import { BaseEntity } from 'src/base-entity';

@InputType()
export class PlaceDto extends BaseEntity {
  // @IsNotEmpty()
  // @Field(() => Int)
  // id: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  @Length(3, 200)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  description: string;

  @IsString()
  @Field({nullable: true})
  location: string;

  @IsString()
  @Field({nullable: true})
  latitude?: string;

  @IsString()
  @Field({nullable: true})
  longitude?: string;

  @IsNotEmpty()
  @Field()
  hours: string;

  @Field(() => GraphQLUpload, {nullable: true, description: 'image file'}) 
  imageFile?: Upload
}
