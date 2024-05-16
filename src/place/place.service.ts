import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { Place } from './entities/place.entity';;

@Injectable()
export class PlaceService {
  constructor(@InjectRepository(Place)
   private placeRepository: Repository<Place>,) {}

  createPlace(createPlaceInput:CreatePlaceInput): Promise<Place> {
    const newPlace = this.placeRepository.create(createPlaceInput);
    return this.placeRepository.save(newPlace);
  }

  async findAll(): Promise<Place[]> {
    return this.placeRepository.find();//SELECT * places
  }

 
  findOne(id: string): Promise<Place | null> {
    return this.placeRepository.findOneBy({ id });
  }
