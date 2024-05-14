import { IsUUID, Length } from 'class-validator';
import { CreatePlaceInput } from './create-place.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePlaceInput extends PartialType(CreatePlaceInput) {
  @Field(() => ID)
  @IsUUID('4', { each: true })
  id: string;

  @Field({ nullable: true })
  @Length(3, 100)
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  location?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field({ nullable: true })
  latitude?: string;

  @Field({ nullable: true })
  open_hours?: string;
}