import { Food } from "game/actors/food/food";

// TODO refactor
export class Cell {
    public hasSpider: Boolean;
    public hasAnt: Boolean;
    public hasFood: boolean;
    public hasFoodScent: boolean;
    public hasBigSpider: boolean;
    public hasAlertScent: boolean;
    public hasRedAnt: boolean;
    public hasNest: boolean;
    public hasSmallSpider: boolean;
    public food: Food;
    public hasBlackAnt: boolean;

    constructor(public x: number, public y: number) {}
}
