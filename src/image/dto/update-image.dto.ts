import { IsUUID } from 'class-validator';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateImageInput } from './create-image.dto';

@InputType()
export class UpdateImageInput extends PartialType(CreateImageInput) {
  @Field(() => ID)
  @IsUUID('4', { each: true })
  id: number;

  @Field()
  file: string;

}