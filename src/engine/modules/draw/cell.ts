export class Cell {
    public hasSpider: boolean;
    public hasAnt: boolean;
    public hasFood: boolean;
    public hasBigSpider: boolean;
    public hasAlertScent: boolean;
    public hasRedAnt: boolean;
    public hasNest: boolean;
    public hasSmallSpider: boolean;
    public hasBlackAnt: boolean;
    public hasFoodPhermone: boolean;

    constructor(public x: number, public y: number) {}

    public emptyCell() {
        this.hasSpider = false;
        this.hasAnt = false;
        this.hasFood = false;
        this.hasBigSpider = false;
        this.hasAlertScent = false;
        this.hasRedAnt = false;
        this.hasNest = false;
        this.hasSmallSpider = false;
        this.hasBlackAnt = false;
    }
}
