import { IAnimal } from "common/model";

export interface ISpider {
    carry(item: Item): void;
}

export enum spiderType {
    small,
    medium,
    larger,
    extra,
}

export type Item = IAnimal;
