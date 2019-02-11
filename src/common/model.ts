export interface IAnimal {
    isAlive: boolean;
    isMoving: boolean;
}

export interface Point {
    x: number;
    y: number;
}

export interface IAnimationType {
    walking: IDrawable;
    idle: IDrawable;
    attack: IDrawable;
}

interface IDrawable {
    resourceUrl: string;
}

export interface Sprite {
    image: HTMLImageElement;
    width: number;
    height: number;
}
