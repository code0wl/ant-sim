import { antType } from "game/actors/ant/model";
import { spiderType } from "game/actors/spider/model";
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
    spider: "#8a0707",
    redAnt: "#ff2200",
    blackAnt: "#000",
    foodPheromone: "#551a8b",
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

export type IActor = Actor;

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

// tensorflow part
export interface IUpdateActor {
    updateActor(): void;
}
