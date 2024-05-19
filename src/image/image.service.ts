import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateImageInput } from './dto/create-image.dto';
import { UpdateImageInput } from './dto/update-image.dto';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('images')
export class ImageService {

  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>) {}

  @Post()
  async create(@Body() createImageInput: CreateImageInput): Promise<Image> {
    const newImage = this.imageRepository.create(createImageInput);
    return this.imageRepository.save(newImage);
  }

  @Get()
  async findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Image> { 
    return this.imageRepository.findOne({ where: { id } }); 
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateImageInput: UpdateImageInput): Promise<Image> { 
    const imageToUpdate = await this.imageRepository.findOne({ where: { id } }); 
    if (!imageToUpdate) {
      throw new Error(`Image with ID ${id} not found`);
    }

    Object.assign(imageToUpdate, updateImageInput);
    return this.imageRepository.save(imageToUpdate);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> { 
    const imageToRemove = await this.imageRepository.findOne({ where: { id } }); 
    if (!imageToRemove) {
      throw new Error(`Image with ID ${id} not found`);
    }

    await this.imageRepository.remove(imageToRemove);
  }
}
