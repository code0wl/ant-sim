import { IDrawable } from "excalibur";

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
}
