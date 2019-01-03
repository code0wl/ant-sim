export interface IAnt {
    carry(item: Item): void;
}

export enum antType {
    red,
    black,
}

export type Item = "wood" | "food" | "enemy";

export type Colony = "red" | "black";
