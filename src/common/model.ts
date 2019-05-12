export interface IAnimal {
    isAlive: boolean;
    isMoving: boolean;
}

export interface Point {
    x: number;
    y: number;
}

export interface IAnimationType {
    walking: string;
    idle: string;
    attack: string;
    width: number, 
    height: number
}

export interface Sprite {
    image: HTMLImageElement;
    width: number;
    height: number;
}
