import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType('Place')
export class Place {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  location: string;

  @Column()
  @Field()
  latitude: string;

  @Column()
  @Field()
  longitude: string;

  @Column()
  @Field()
  open_hours: string;

  @Column()
  @Field()
  createdAt: string;
}
