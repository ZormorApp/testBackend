import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  @IsString()
  filename: string;

  @IsNotEmpty()
  placeId: string;
}
