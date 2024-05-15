import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Place } from './entity/place.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlaceDto, FindPlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlaceService {
    constructor(
        @InjectRepository(Place)
        private readonly placeRepository: Repository<Place>,
    ) {}

    async getAll(): Promise<FindPlaceDto[]> {
        const places= await this.placeRepository.find();
        return places.map(place => ({
            id: place.id,
            name: place.name,
            description: place.description,
            location: place.location,
            latitude: place.latitude,
            longitude: place.longitude,
            hours: place.hours
        }))
    }
   
    async getOne(id: number):Promise<Place | undefined> {
        return this.placeRepository.findOneBy({id})
    } 

    async create(createPlaceDto: CreatePlaceDto): Promise<FindPlaceDto> {
        const newPlace = this.placeRepository.create(createPlaceDto);
        await this.placeRepository.save(newPlace)
        return newPlace
    }

    async update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place> {
        const placeUpdate = await this.placeRepository.findOneBy({id});

        if(!placeUpdate) {
            return undefined;
        }
        
        placeUpdate.name = updatePlaceDto.name,
        placeUpdate.description = updatePlaceDto.description,
        placeUpdate.location = updatePlaceDto.location,
        placeUpdate.latitude = updatePlaceDto.latitude,
        placeUpdate.longitude = updatePlaceDto.longitude,
        placeUpdate.hours = updatePlaceDto.hours

        await this.placeRepository.save(placeUpdate)

        return placeUpdate
    }

    async remove(id: number): Promise<void> {
        const placeToRemove = await this.placeRepository.findOneBy({id})

        if (!placeToRemove) {
            throw new NotFoundException (`Place with ID ${id} not found`)
        }

        await this.placeRepository.remove(placeToRemove)
    }
}
