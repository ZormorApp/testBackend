import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place } from './entity/place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceController } from './place.controller';
import { PlaceResolver } from './place.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Place]), UserModule],
  controllers: [PlaceController],
  providers: [PlaceService, PlaceResolver],
})
export class PlaceModule {}
