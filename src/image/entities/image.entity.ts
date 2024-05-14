import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Place } from 'src/place/entities/place.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  // Define many-to-one relationship with place
  @ManyToOne(() => Place, (place) => place.images)
  place: Place;
}
