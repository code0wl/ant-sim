import { Food } from "game/actors/food/food";
import { Spider } from "game/actors/spider/spider";
import { Ant } from "game/actors/ant/ant";
import { Nest } from "game/actors/nest/nest";

export class Cell {
    public nest: Nest;
    public food: Food;
    public ant: Ant;
    public spider: Spider;
    public hasPhermones: boolean = false;

    constructor(public x: number, public y: number) {}

    public emptyCell() {
        this.nest = null;
        this.food = null;
        this.ant = null;
        this.spider = null;
    }
}
