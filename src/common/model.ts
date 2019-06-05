import { antType } from "game/actors/ant/model";
import { spiderType } from "game/actors/spider/model";

export interface IAnimal {
    currentState: currentState;
}

export type IActorType = antType | spiderType | "food";

export enum currentState {
    walk,
    idle,
    dead,
    attack,
}

export interface IAnimationType {
    walk: string;
    idle: string;
    attack: string;
    dead: string;
}

export interface Sprite {
    type?: IActorType;
    image: HTMLImageElement;
}
