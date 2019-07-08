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

        const food = <Food>actor;
        const ant = <Ant>actor;
        const nest = <Nest>actor;
        const spider = <Spider>actor;

        if (isFood) {
            cell.food = food;
        }

        if (isAnt) {
            cell.ant = ant;
        }

        if (isNest) {
            cell.nest = nest;
        }

        if (isSpider) {
            cell.spider = spider;
        }

        if (isAnt && cell.food) {
            ant.gather(cell.food);
            cell.food.removeFood();
        }

        if (isAnt && cell.spider) {
            actor.remove();
        }

        if (ant.hasFood) {
            cell.hasPhermones = true;
            cell.foodScent = ant.food;
            setTimeout(() => {
                cell.hasPhermones = false;
            }, 10000);
        }

        if (isAnt && cell.hasPhermones) {
            ant.food = cell.foodScent;
        }

        if (ant.hasFood && cell.nest) {
            ant.deliverFood();
        }
    }
}
