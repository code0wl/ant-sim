import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";
import { Food } from "game/actors/food/food";
import { Cell } from "../draw/cell";
import { Nest } from "game/actors/nest/nest";
import { IActor } from "common/model";

// gives the actions required for actors to act accordingly to their scripts ;)
export class Director {
    handleEvent(cell: Cell, actor: IActor) {
        // change engine to make big eat small
        const isAnt = actor instanceof Ant;
        const isSpider = actor instanceof Spider;
        const isFood = actor instanceof Food;
        const isNest = actor instanceof Nest;

        if (isAnt) {
            cell.hasAnt = true;
        }

        if (isNest) {
            cell.hasNest = true;
        }

        if ((<Ant>actor).hasFood && cell.hasNest) {
            (<Ant>actor).deliverFood();
        }

        if (isSpider) {
            cell.hasSpider = true;
        }

        if (isFood) {
            cell.hasFood = true;
        }

        if (isAnt && cell.hasFood) {
            (<Ant>actor).gather();
        }

        if (isAnt && cell.hasSpider) {
            (<Ant>actor).alert();
            actor.remove();
            cell.hasAlertScent = true;
            cell.hasAnt = false;
        }

        if (isFood && cell.hasAnt) {
            (<Food>actor).removeFood();
            cell.hasAnt = false;
        }
    }
}
