import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field((type) => Int)
  id: number;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ nullable: true, default: false })
  @Field({ nullable: true })
  is_admin: boolean;

  @Column()
  @Field()
  password: string;
}
