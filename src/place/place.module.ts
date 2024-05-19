import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceResolver } from './place.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './entities/place.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Place]), UserModule],
  providers: [PlaceResolver, PlaceService],
})
export class PlaceModule {}
