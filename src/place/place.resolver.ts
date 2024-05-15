import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PlaceService } from "./place.service";
import { Place } from "./entity/place.entity";
import { PlaceDto } from "./dto/create-place.dto";
import { UpdatePlaceDto } from "./dto/update-place.dto";

@Resolver()
export class PlaceResolver {
    constructor(private placeService: PlaceService) {}

    @Query(() => [Place])
    async places(): Promise<Place[]> {
        return await this.placeService.getAll()
    }

    @Mutation(returns => Place)
    async createPlace(@Args('createPlaceInput') createPlaceDto: PlaceDto): Promise<Place> {
        return await this.placeService.create(createPlaceDto)
    }

    @Query(() => Place, { name: 'place' })
    async findOne(@Args('id', { type: () => Number }) id: number) {
      return await this.placeService.getOne(id);
    }

    @Mutation(() => Place)
    async updatePlace(@Args('updatePlaceInput') updatePlaceDto: UpdatePlaceDto) {
      return await this.placeService.update(updatePlaceDto.id, updatePlaceDto);
    }
  
    @Mutation(() => Place)
    async removePlace(@Args('id', { type: () => Number }) id: number) {
      return await this.placeService.remove(id);
    }


}
