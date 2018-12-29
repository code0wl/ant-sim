export interface IAnt {
    carry(item: Item): void;
}

export type Item = "wood" | "food" | "enemy";
