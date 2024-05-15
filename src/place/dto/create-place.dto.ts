export class CreatePlaceDto {
    name: string;
    description: string;
    location: string;
    latitude: string;
    longitude: string;
    hours: string;
}

export class FindPlaceDto {
    id: number;
    name: string;
    description: string;
    location: string;
    latitude: string;
    longitude: string;
    hours: string;
}