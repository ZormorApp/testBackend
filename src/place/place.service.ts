import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { Place } from './entities/place.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private placeRepository: Repository<Place>,
    private userService: UserService,
  ) {}

  createPlace(createPlaceInput: CreatePlaceInput): Promise<Place> {
    const newPlace = this.placeRepository.create(createPlaceInput);
    return this.placeRepository.save(newPlace);
  }

  async findAll(): Promise<Place[]> {
    return this.placeRepository.find(); //SELECT * places
  }

  findOne(id: string): Promise<Place | null> {
    return this.placeRepository.findOneBy({ id });
  }

  async update( id : string, updatePlaceInput: UpdatePlaceInput) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new UnauthorizedException('unauthorized user');
    }
    const place = await this.findOne(updatePlaceInput.id);
    const { name, description, open_hours } = updatePlaceInput;
    if (name) {
      place.name = name;
    }
    if (description) {
      place.description = description;
    }
    if (open_hours) {
      place.open_hours = open_hours;
    }

    try {
      await this.placeRepository.save(place);
      return place;
    } catch (error) {
      console.log('Error oooo', error);
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string) {
    const place = await this.findOne(id);
    try {
      await this.placeRepository.remove(place);
    } catch (error) {
      throw new Error(`Failed to delete place ${error}`);
    }
  }
}
