import { Item } from "../spider/model";

export interface IAnt {
    carry(item: Item): void;
}

export enum antType {
    red,
    black,
}

export type Colony = "red" | "black";
