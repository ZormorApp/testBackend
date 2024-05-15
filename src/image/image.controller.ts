import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ImageService } from './image.service'; // Import the ImageService
import { CreateImageInput } from './dto/create-image.dto';
import { UpdateImageInput } from './dto/update-image.dto';
import { Image } from './entities/image.entity'; // Import the Image entity

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {} // Inject ImageService

  @Post()
  async create(@Body() createImageDto: CreateImageInput): Promise<Image> {
    return this.imageService.create(createImageDto);
  }

  @Get()
  async findAll(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Image> {
    return this.imageService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateImageDto: UpdateImageInput): Promise<Image> {
    return this.imageService.update(id, updateImageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.imageService.remove(id);
  }
}
