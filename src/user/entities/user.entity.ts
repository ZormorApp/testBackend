import {
  ObjectType,
  Field,
  InputType,
  registerEnumType,
  ID,
} from '@nestjs/graphql';
import { BaseEntity } from 'src/base-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../models/user.interface';

registerEnumType(UserRole, {
  name: 'UserRole',
});

@Entity('users')
@ObjectType()
@InputType('UserInput')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ unique: true })
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  @Field(() => UserRole)
  role: UserRole;
}
