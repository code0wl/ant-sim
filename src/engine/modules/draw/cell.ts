// TODO refactor
export class Cell {
    public hasSpider: boolean = false;
    public hasAnt: boolean = false;
    public hasFood: boolean = false;
    public hasFoodScent: boolean = false;
    public hasBigSpider: boolean = false;
    public hasAlertScent: boolean = false;
    public hasRedAnt: boolean = false;
    public hasNest: boolean = false;
    public hasSmallSpider: boolean = false;
    public hasBlackAnt: boolean = false;

    constructor(public x: number, public y: number) {}
}
