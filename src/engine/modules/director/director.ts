import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";
import { Food } from "game/actors/food/food";
import { Cell } from "../draw/cell";
import { spiderType } from "game/actors/spider/model";
import { Nest } from "game/actors/nest/nest";
import { antType } from "game/actors/ant/model";
import { IActor } from "common/model";

// gives the actions required for actors to act accordingly to their scripts ;)
export class Director {
    handleEvent(cell: Cell, actor: IActor) {
        // change engine to make big eat small
        const isAnt = actor instanceof Ant;
        const isSpider = actor instanceof Spider;
        const isFood = actor instanceof Food;
        const isNest = actor instanceof Nest;

        const isBlackAnt = isAnt && actor.type === antType.black;
        const isRedAnt = isAnt && actor.type === antType.red;

        const isSmallSpider = isSpider && actor.type === spiderType.small;
        const isBigSpider = isSpider && actor.type === spiderType.large;

        if (isAnt) {
            cell.hasAnt = true;
        }

        if (isRedAnt) {
            cell.hasRedAnt = true;
        }

        if (isBlackAnt) {
            cell.hasBlackAnt = true;
        }

        if (isNest) {
            cell.hasNest = true;
        }

        if ((<Ant>actor).hasFood && cell.hasNest) {
            (<Ant>actor).deliverFood();
        }

        if (isFood) {
            cell.hasFood = true;
        }

        if (isSpider) {
            cell.hasSpider = true;
        }

        if (isSmallSpider) {
            cell.hasSmallSpider = true;
        }

        if (isBigSpider) {
            cell.hasBigSpider = true;
        }

        if (isAnt && cell.hasFood) {
            (<Ant>actor).gather();
        }

        if (isAnt && cell.hasSpider) {
            (<Ant>actor).alert();
            actor.remove();
            cell.hasAlertScent = true;
        }

        if (isFood && cell.hasAnt) {
            (<Food>actor).removeFood();
        }

        if (isSmallSpider && cell.hasBigSpider) {
            actor.remove();
        }
    }
}
