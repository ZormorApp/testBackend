import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType('User')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

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
