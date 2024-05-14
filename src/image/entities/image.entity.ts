import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Place } from 'src/place/entities/place.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Image')
@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  filename: string;

  // Define many-to-one relationship with place
  @ManyToOne(() => Place, (place) => place.images)
  @Field(() => Place)
  place: Place;
}
