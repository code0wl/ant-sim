import { Food } from "game/actors/food/food";

export class Cell {
    public hasSpider: Boolean;
    public hasAnt: Boolean;
    public hasFood: boolean;
    public hasBigSpider: boolean;
    public hasSmallSpider: boolean;
    public food: Food;

    constructor(public x: number, public y: number) {}
}
