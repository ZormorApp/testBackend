import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entity/place.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UserRole } from 'src/user/models/user.interface';
import { Roles } from 'src/user/user.decorator';
import { RoleGuard } from 'src/user/user.guard';

const storage = diskStorage({
  destination: './uploads/locationImage',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  async getAll(): Promise<Place[]> {
    return this.placeService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Place> {
    console.log(id);
    return this.placeService.getOne(id);
  }

  //     @Post()
  //    async create(@Body() createPlaceDto: PlaceDto): Promise<Place> {
  //         console.log(createPlaceDto)
  //         return this.placeService.create(createPlaceDto)
  //     }

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage }))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createPlaceDto: PlaceDto,
  ): Promise<Place> {
    if (file) {
      createPlaceDto.locationImage = file.filename;
    }
    return this.placeService.create(createPlaceDto);
  }

  @Put(':id')
  @Roles(UserRole.ADMIN)
  @UseGuards(RoleGuard)
  async update(
    @Param('id') id: number,
    @Body() updatePlaceDto: UpdatePlaceDto,
  ): Promise<Place> {
    return this.placeService.update(id, updatePlaceDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @UseGuards(RoleGuard)
  async remove(@Param('id') id: number) {
    return this.placeService.remove(id);
  }
}
