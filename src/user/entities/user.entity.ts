import { ObjectType, Field, InputType, registerEnumType } from '@nestjs/graphql';
import { BaseEntity } from 'src/base-entity';
import { Column, Entity } from 'typeorm';
import { UserRole } from '../models/user.interface';

registerEnumType(UserRole, {
  name: 'UserRole',
});

@Entity('users')
@ObjectType()
@InputType('UserInput')
export class User extends BaseEntity {
  // @PrimaryGeneratedColumn('uuid')
  // @Field((type) => Int)
  // id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  @Field(() => UserRole)
  role: UserRole;

}
