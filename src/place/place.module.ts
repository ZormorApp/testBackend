import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place } from './entity/place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceController } from './place.controller';
import { PlaceResolver } from './place.resolver';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './entities/place.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Place]), UserModule],
  providers: [PlaceResolver, PlaceService],
=======

@Module({
  imports : [TypeOrmModule.forFeature([Place])],
  controllers:[PlaceController],
  providers: [PlaceService, PlaceResolver]
>>>>>>> 7a63cc9b75354be07366ae2f2233412a9d3b2f98
})
export class PlaceModule {}
