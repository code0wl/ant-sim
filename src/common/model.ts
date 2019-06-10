import { antType } from "game/actors/ant/model";
import { spiderType } from "game/actors/spider/model";
import { Animal } from "./animal";
import { Actor } from "engine/modules/actor/actor";

export type IActorType = antType | spiderType | actorType.food | actorType.nest;

export enum actorType {
    ant = "ant",
    spider = "spider",
    food = "food",
    nest = "nest",
    rock = "rock",
}

export enum currentState {
    idle,
    walk,    
    dead,
    attack,
}

export const Colors = {
    grass: "#228B22",
    food: "#edcf18",
    debug: "#C9B8B1",
    nest: "#000000",
};

export enum Direction {
    north,
    northEast,
    northWest,

    south,
    southEast,
    southWest,

    east,
    west,
}

export interface IActor extends Animal, Actor {
    height: number;
    currentState: number;
    width: number;
    currentRotation: number;
    graphics: Sprite[];
    draw(ctx: CanvasRenderingContext2D): void;
}

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
