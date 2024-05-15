import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class PlaceDto {
  @Field(() => Int)
  id: number;

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

  @IsString()
  @Field({nullable: true})
  latitude?: string;

  @IsString()
  @Field({nullable: true})
  longitude?: string;

  @IsNotEmpty()
  @Field()
  hours: string;

  // @Field(() => UploadImageInput) 
  // image: UploadImageInput;
}
