export interface IAnimal {
    move({ longitude, latitude }: Coordinates): void;
    eat(): void;
    isAlive: boolean;
    isMoving: boolean;
}

export interface Coordinates {
    longitude: number;
    latitude: number;
}
