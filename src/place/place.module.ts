import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place } from './entity/place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceController } from './place.controller';

@Module({
  imports : [TypeOrmModule.forFeature([Place])],
  controllers:[PlaceController],
  providers: [PlaceService]
})
export class PlaceModule {}
