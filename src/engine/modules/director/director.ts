import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";
import { Food } from "game/actors/food/food";
import { Cell } from "../draw/cell";
import { Nest } from "game/actors/nest/nest";
import { IActor } from "common/model";

// gives the actions required for actors to act accordingly to their scripts ;)
export class Director {
    handleEvent(cell: Cell, actor: IActor) {
        const isAnt = actor instanceof Ant;
        const isSpider = actor instanceof Spider;
        const isFood = actor instanceof Food;
        const isNest = actor instanceof Nest;

        if (isFood) {
            cell.food = <Food>actor;
        }

        if (isAnt) {
            cell.ant = <Ant>actor;
        }

        if (isNest) {
            cell.nest = <Nest>actor;
        }

        if (isSpider) {
            cell.spider = <Spider>actor;
        }

        if (isAnt && cell.food) {
            (<Ant>actor).gather();
            cell.food.removeFood();
        }

        if (isAnt && cell.spider) {
            (<Ant>actor).alert();
            actor.remove();
        }

        if ((<Ant>actor).hasFood) {
            cell.hasPhermones = true;
        }

        if (isAnt && cell.hasPhermones) {
            const ant = <Ant>actor;
            ant.hasScent = true;
        }

        if ((<Ant>actor).hasFood && cell.nest) {
            (<Ant>actor).deliverFood();
        }
    }
}
