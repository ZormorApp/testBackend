import { Injectable } from '@nestjs/common';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';

@Injectable()
export class PlaceService {
  create(createPlaceInput: CreatePlaceInput) {
    return 'This action adds a new place';
  }

  findAll() {
    return `This action returns all place`;
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
