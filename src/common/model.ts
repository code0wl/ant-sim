export interface IAnimal {
    isAlive: boolean;
    isMoving: boolean;
}

export interface Point {
    x: number;
    y: number;
}

export enum AnimationType {
    walking,
    idle,
    attack,
}

export interface Sprite {
    image: HTMLImageElement[];
    width: number;
    height: number;
}
