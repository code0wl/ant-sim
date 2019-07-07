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
            cell.ant = <Ant>actor;
        }

        if (isNest) {
            cell.nest = <Nest>actor;
        }

        if (isSpider) {
            cell.spider = <Spider>actor;
        }

        if (isFood) {
            cell.food = <Food>actor;
        }

        if (isAnt && (<Ant>actor).hasFood && cell.nest) {
            (<Ant>actor).deliverFood();
        }

        if (isAnt && !(<Ant>actor).hasFood && cell.food) {
            (<Ant>actor).gather();
            cell.food.removeFood();
        }

        if (cell.ant && cell.spider) {
            const ant = cell.ant;
            ant.alert();
            ant.remove();
        }

        if (isFood && cell.ant) {
            (<Food>actor).removeFood();
        }
    }
}
