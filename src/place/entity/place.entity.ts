import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 40})
  name: string;

  @Column({type: 'varchar', length: 40})
  description: string;

  @Column({type: 'varchar', length: 140})
  location: string;

  @Column({type: 'float', length: 30})
  latitude: string;

  @Column({type: 'float', length: 30})
  longitude: string;

  @Column({type:  'varchar', })
  hours: string;

}