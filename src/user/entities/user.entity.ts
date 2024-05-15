import { ObjectType, Field, Int, InputType, registerEnumType } from '@nestjs/graphql';
import { BaseEntity } from 'src/base-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user'
}

registerEnumType(UserRole, {
  name: 'UserRole',
});

@Entity('users')
@ObjectType()
@InputType('UserInput')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field((type) => Int)
  id: number;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  @Field(() => UserRole)
  role: UserRole;

  @Column()
  @Field()
  password: string;
}
