import { IAnimal } from "common/model";

export interface ISpider {
    carry(item: Item): void;
}

export type Item = IAnimal;
