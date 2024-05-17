import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from 'src/image/entities/image.entity';
import { BaseEntity } from 'src/base-entity';

@Entity()
@ObjectType('place')
export class Place extends BaseEntity {
  // @PrimaryGeneratedColumn()
  // id: number;

  @Field()
  @Column({type: 'varchar', length: 40})
  name: string;

  @Field()
  @Column({type: 'varchar', length: 40})
  description: string;

  @Field()
  @Column({type: 'varchar', length: 140})
  location: string;

  @Field()
  @Column({type: 'float'})
  latitude: string;

  @Field()
  @Column({type: 'float'})
  longitude: string;

  @Field()
  @Column({type: 'varchar', })
  hours: string;

  @OneToMany(() => Image, (image) => image.place, { nullable: true })
  @Field(() => [Image], { nullable: true })
  images: Image[];
}