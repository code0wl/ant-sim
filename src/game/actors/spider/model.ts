import { Point } from "engine/modules/draw/point";

export interface ISpiderConfig {
    spider: spiderType;
    coordinates: Point;
}

export enum spiderType {
    small,
    large,
}
