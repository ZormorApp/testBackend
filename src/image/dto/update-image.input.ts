import { IsUUID } from 'class-validator';
import { CreateImageInput } from './create-image.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateImageInput extends PartialType(CreateImageInput) {
  @Field(() => ID)
  @IsUUID('4', { each: true })
  id: string;

  @Field()
  file: string;

}