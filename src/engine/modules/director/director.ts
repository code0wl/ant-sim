import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";
import { Food } from "game/actors/food/food";
import { Cell } from "../draw/cell";
import { Actor } from "../actor/actor";

// gives the actions required for actors to act accordingly to their scripts ;)
export class Director {
    handleEvent(cell: Cell, actor: Actor) {
        const isAnt = actor instanceof Ant;
        const isSpider = actor instanceof Spider;
        const isFood = actor instanceof Food;

        if (isAnt && cell.hasFood) {
            const ant = actor as Ant;
            ant.gather();
        }

        if (isFood && cell.hasAnt) {
            const food = actor as Food;
            food.remove();
        }

        if (isAnt && cell.hasSpider) {
            const ant = actor as Ant;
            ant.remove();
        }

        if (isAnt) {
            cell.hasAnt = true;
        }

        if (isFood) {
            cell.hasFood = true;
        }

        if (isSpider) {
            cell.hasSpider = true;
        }
    }
}
