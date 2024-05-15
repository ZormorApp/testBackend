import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PlaceService } from "./place.service";
import { Place } from "./entity/place.entity";
import { PlaceDto } from "./dto/create-place.dto";

@Resolver()
export class PlaceResolver {
    constructor(private placeService: PlaceService) {}

    @Query(returns => [Place])
    async places(): Promise<Place[]> {
        return this.placeService.getAll()
    }

    @Mutation(returns => Place)
    create(@Args() createPlaceDto: PlaceDto): Promise<Place> {
        return this.placeService.create(createPlaceDto)
    }
}