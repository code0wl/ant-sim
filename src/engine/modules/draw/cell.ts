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

    constructor(public x: number, public y: number) {}
}
