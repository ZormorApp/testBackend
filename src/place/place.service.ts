import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Place } from './entity/place.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  async getAll(): Promise<Place[]> {
    const places = await this.placeRepository.find();
    return places;
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

    const { name, description, location, longitude, latitude, hours } =
      updatePlaceDto;
    if (name) {
      placeUpdate.name = name;
    }

    if (description) {
      placeUpdate.description = description;
    }

    if (location) {
      placeUpdate.location = location;
    }

    if (longitude) {
      placeUpdate.longitude = longitude;
    }

    if (latitude) {
      placeUpdate.latitude = updatePlaceDto.latitude;
    }

    if (hours) {
      placeUpdate.hours = hours;
    }

    // placeUpdate.location = updatePlaceDto.location;
    // placeUpdate.latitude = updatePlaceDto.latitude;
    // placeUpdate.longitude = updatePlaceDto.longitude;
    // placeUpdate.hours = updatePlaceDto.hours;

    await this.placeRepository.save(placeUpdate);

    return placeUpdate;
  }

  async remove(id: number) {
    const placeToRemove = await this.placeRepository.findOne({ where: { id } });

    if (!placeToRemove) {
      throw new NotFoundException(`Place with ID ${id} not found`);
    }

    await this.placeRepository.remove(placeToRemove);

    return placeToRemove;
  }
}
