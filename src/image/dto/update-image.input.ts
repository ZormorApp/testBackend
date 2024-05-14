import { IsUUID } from 'class-validator';
import { CreatePlaceInput } from './create-place.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePlaceInput extends PartialType(CreatePlaceInput) {
  @Field(() => ID)
  @IsUUID('4', { each: true })
  id: string;

  @Field()
  file: string;

}