import { Food } from "game/actors/food/food";
import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";
import { Nest } from "game/actors/nest/nest";

// TODO refactor
export class Cell {
    public ant: Ant;
    public spider: Spider;
    public food: Food;
    public nest: Nest;

    constructor(public x: number, public y: number) {}
}
