import { IActorType } from "common/model";
import { Point } from "engine/modules/draw/point";

export interface ISpider {
    carry(item: Item): void;
}

export interface ISpiderConfig {
    spider: spiderType;
    coordinates: Point;
}

export enum spiderType {
    small,
    large,
}

export type Item = IActorType;
