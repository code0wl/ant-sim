export interface IAnt {
    carry(item: Item): void;
}

export enum antType {
    red,
    black,
    yellow,
}

export type Item = "wood" | "food" | "enemy";
