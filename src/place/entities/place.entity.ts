import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from 'src/image/entities/image.entity';

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

  // Define one-to-many relationship with images
  // Define one-to-many relationship with images
  @OneToMany(() => Image, (image) => image.place, { nullable: true })
  images: Image[];
}
