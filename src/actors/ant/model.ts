export interface IAnt {
    carry(Item);
}

export type Item = "wood" | "food" | "enemy";
