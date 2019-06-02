import { IAnimal } from "common/model";

export interface ISpider {
    carry(item: Item): void;
}

export enum spiderType {
    small,
    large
}

export type Item = IAnimal;
