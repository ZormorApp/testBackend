import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from 'src/image/entities/image.entity';
import { BaseEntity } from 'src/base-entity';

@Entity()
@ObjectType('place')
export class Place extends BaseEntity {
  @Field()
  @Column({type: 'varchar', length: 100})
  name: string;

  @Field()
  @Column({type: 'varchar', length: 100})
  description: string;

  @Field()
  @Column({type: 'varchar', length: 200})
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

  @Column({nullable: true})
  locationImage: string;
}