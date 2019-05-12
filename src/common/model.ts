import { antType } from "game/actors/ant/model";
import { spiderType } from "game/actors/spider/model";

export interface IAnimal {
    isAlive: boolean;
    isMoving: boolean;
}

export type IAnimalType = antType | spiderType;

export interface Point {
    x: number;
    y: number;
}

export enum currentState {
    walk,
    idle,
    dead,
}

export interface IAnimationType {
    walk: string;
    idle: string;
    attack: string;
    dead:string;
}

export interface Sprite {
    type?: IAnimalType;
    image: HTMLImageElement;
}
