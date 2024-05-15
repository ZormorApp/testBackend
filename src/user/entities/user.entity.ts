import { Field } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({type: 'varchar', length: 40})
    email: string;

    @Field({nullable: true})
    @Column({type: 'varchar'})
    password: string

    @Column({unique: true})
    @Field()
    is_admin: boolean;
    
}
