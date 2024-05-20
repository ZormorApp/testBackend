import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from 'src/image/entities/image.entity';
import { BaseEntity } from 'src/base-entity';

@Entity()
@ObjectType('place')
export class Place {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 40, unique: true })
  name: string;

  @Field()
  @Column({ type: 'varchar', length: 40 })
  description: string;

  @Field()
  @Column({ type: 'varchar', length: 140 })
  location: string;

  @Field()
  @Column({ type: 'float' })
  latitude: string;

  @Field()
  @Column({ type: 'float' })
  longitude: string;

  @Field()
  @Column({ type: 'varchar' })
  hours: string;

  // @OneToMany(() => Image, (image) => image.place, { nullable: true })
  // @Field(() => [Image], { nullable: true })
  // images: Image[];
  @Field({ nullable: true })
  @Column({ nullable: true })
  locationImage: string;
}
