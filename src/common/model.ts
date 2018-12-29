export interface IAnimal {
    move(x: number, y: number): void;
    eat(): void;
    isAlive: boolean;
    isMoving(): boolean;
}

export interface Coordinates {
    longitude: number;
    latitude: number;
}
