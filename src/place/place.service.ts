import { Injectable } from '@nestjs/common';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { Place } from './place.entity';

@Injectable()
export class PlaceService {
  constructor(@InjectRepository(Place)private placeRepository:Repository<place>){}

  create(createPlaceInput:createPlaceInput): Promise<Place> {
    const newPlace = this.placeRepository.create(createPlaceInput);
    return this.placeRepository.save(newPlace);
  }

  async findAll():Promise<[place]> {
    return this.placeRepository.find();//SELECT * places
  }

  findOne(id: string) {
    return `This action returns a #${id} place`;
  }

  update(id: string, updatePlaceInput: UpdatePlaceInput) {
    return `This action updates a #${id} place`;
  }

  remove(id: string) {
    return `This action removes a #${id} place`;
  }
}
