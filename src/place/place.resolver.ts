import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PlaceService } from './place.service';
import { Place } from './entity/place.entity';
import { PlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserService } from 'src/user/user.service';
import { UserRole } from 'src/user/models/user.interface';

@Resolver()
export class PlaceResolver {
  constructor(
    private placeService: PlaceService,
    private userService: UserService,
  ) {}

  @Query(() => [Place])
  async places(): Promise<Place[]> {
    return await this.placeService.getAll();
  }

  @Mutation((returns) => Place)
  @UseGuards(JwtAuthGuard)
  async createPlace(
    @Args('createPlaceInput') createPlaceDto: PlaceDto,
    @Context() context: any,
  ): Promise<Place> {
    // console.log(context);
    console.log(context.req.user);
    const username = context.req.user.username;

    const user = await this.userService.findOne(username);
    console.log(user);
    if (!user || user.role != UserRole.ADMIN) {
      throw new UnauthorizedException('Unauthorize user ');
    }

    return await this.placeService.create(createPlaceDto);
  }

  @Query(() => Place, { name: 'place' })
  async findOne(
    @Args('id', { type: () => Number }) id: number,
  ): Promise<Place> {
    return await this.placeService.getOne(id);
  }

  @Mutation(() => Place)
  @UseGuards(JwtAuthGuard)
  async updatePlace(
    @Args('updatePlaceInput') updatePlaceDto: UpdatePlaceDto,
    @Context() context: any,
  ) {
    // console.log(context.req.user);
    const username = context.req.user.username;

    const user = await this.userService.findOne(username);
    // console.log(user);
    if (!user || user.role != UserRole.ADMIN) {
      throw new UnauthorizedException('Unauthorize user ');
    }
    return await this.placeService.update(updatePlaceDto.id, updatePlaceDto);
  }

  @Mutation(() => Place)
  @UseGuards(JwtAuthGuard)
  async removePlace(
    @Args('id', { type: () => Number }) id: number,
    @Context() context: any,
  ) {
    // console.log(context.req.user);
    const username = context.req.user.username;
    // console.log('Helooo');
    const user = await this.userService.findOne(username);
    // console.log(user);
    if (user.role != UserRole.ADMIN) {
      throw new UnauthorizedException('Unauthorize user ');
    }
    return await this.placeService.remove(id);
  }
}
