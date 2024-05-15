import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto, FindPlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { BaseEntity } from 'src/base-entity';

@Controller('place')
export class PlaceController {
    constructor(private readonly placeService: PlaceService) {}

    @Get()
    async getAll(): Promise<FindPlaceDto[]> {
        return this.placeService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number): Promise<FindPlaceDto> {
        console.log(id)
        return this.placeService.getOne(id)
      
    }

    @Post() 
   async create(@Body() createPlaceDto: CreatePlaceDto): Promise<FindPlaceDto> {
        console.log(createPlaceDto)
        return this.placeService.create(createPlaceDto)
    }

    @Put() 
     async update(@Param(':id') id: number, @Body() updatePlaceDto: UpdatePlaceDto) {
        return this.placeService.update(id, updatePlaceDto)
    }

    // @Delete()
    // async remove(@Param(':id') id: number): Promise<void> {
    //     return this.placeService.remove(id)
    // }



}
