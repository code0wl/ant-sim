import { antType } from "game/actors/ant/model";
import { spiderType } from "game/actors/spider/model";

export type IActorType = antType | spiderType | "food";

export enum currentState {
    idle,
    walk,
    dead,
    attack,
}

export const Colors = {
    grass: "#228B22",
    food: "#edcf18",
};

export interface IAnimationType {
    walk?: string;
    idle: string;
    attack?: string;
    dead?: string;
}

export interface Sprite {
    type?: IActorType;
    image: HTMLImageElement;
}
