<<<<<<< HEAD
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
=======
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Place } from './entity/place.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
>>>>>>> 7a63cc9b75354be07366ae2f2233412a9d3b2f98

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
<<<<<<< HEAD
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
=======
    private readonly placeRepository: Repository<Place>,
  ) {}

  async getAll(): Promise<Place[]> {
    const places = await this.placeRepository.find();
    return places
  }

  async getOne(id: number): Promise<Place> {
    return this.placeRepository.findOne({ where: { id } });
  }

  async create(createPlaceDto: PlaceDto): Promise<Place> {
    const newPlace = this.placeRepository.create(createPlaceDto);
    await this.placeRepository.save(newPlace);
    return newPlace;
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place> {
    const placeUpdate = await this.placeRepository.findOne({ where: { id } });

    if (!placeUpdate) {
      return undefined;
    }

    placeUpdate.name = updatePlaceDto.name;
    placeUpdate.description = updatePlaceDto.description;
    placeUpdate.location = updatePlaceDto.location;
    placeUpdate.latitude = updatePlaceDto.latitude;
    placeUpdate.longitude = updatePlaceDto.longitude;
    placeUpdate.hours = updatePlaceDto.hours;

    await this.placeRepository.save(placeUpdate);

    return placeUpdate;
  }

  async remove(id: number): Promise<void> {
    const placeToRemove = await this.placeRepository.findOne({ where: { id } });

    if (!placeToRemove) {
      throw new NotFoundException(`Place with ID ${id} not found`);
    }

    await this.placeRepository.remove(placeToRemove);
  }
}
>>>>>>> 7a63cc9b75354be07366ae2f2233412a9d3b2f98
