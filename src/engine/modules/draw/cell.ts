import { Food } from "game/actors/food/food";

// TODO refactor
export class Cell {
    public hasSpider = false;
    public hasAnt = false;
    public hasFood = false;
    public hasBigSpider = false;
    public hasAlertScent = false;
    public hasRedAnt = false;
    public hasNest = false;
    public hasSmallSpider = false;
    public hasBlackAnt = false;
    public hasFoodPhermone = false;

    public food: Food;

    constructor(public x: number, public y: number) {}
}
