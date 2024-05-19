import { InputType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/base-entity';

@InputType()
export class UpdatePlaceDto extends BaseEntity {
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

  // @Field(() => GraphQLUpload, {nullable: true, description: 'image file'}) 
  // imageFile?: Upload
}
