import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from 'src/image/entities/image.entity';

@Entity()
@ObjectType('Place')
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

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
  @Column({type: 'float', length: 30})
  latitude: string;

  @Field()
  @Column({type: 'float', length: 30})
  longitude: string;

  @Field()
  @Column({type:  'varchar', })
  hours: string;

  @OneToMany(() => Image, (image) => image.place, { nullable: true })
  @Field(() => [Image], { nullable: true })
  images: Image[];
}