export interface IAnimal {
    move({ x, y }: Point): void;
    eat(): void;
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
    context: CanvasRenderingContext2D;
    image: string;
    width: number;
    height: number;
}
