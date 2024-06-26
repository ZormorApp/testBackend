import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { ImageResolver } from './image.resolver';


@Module({
  imports:[TypeOrmModule.forFeature([Image])],
  controllers: [ImageController],
  providers: [ImageService, ImageResolver],
})
export class ImageModule {}
