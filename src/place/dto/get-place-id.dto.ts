import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GetPlaceIdDto {
  @Field(() => Int)
  id: number;
}
