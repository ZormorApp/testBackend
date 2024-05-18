import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Place } from 'src/place/entity/place.entity';
import { BaseEntity } from 'src/base-entity';

@ObjectType('image')
@Entity()
export class Image extends BaseEntity {
  // @PrimaryGeneratedColumn()
  // @Field(()=>Int)
  // id: number;

  @Column()
  @Field()
  filename: string;

  // Define many-to-one relationship with place
  // @ManyToOne(() => Place, (place) => place.images)
  @Field(() => Place)
  place: Place;
}
