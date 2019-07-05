import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";
import { Food } from "game/actors/food/food";
import { Cell } from "../draw/cell";
import { spiderType } from "game/actors/spider/model";
import { IActor } from "common/model";
import { Nest } from "game/actors/nest/nest";

// gives the actions required for actors to act accordingly to their scripts ;)
export class Director {
    handleEvent(cell: Cell, actor: IActor) {
        // change engine to make big eat small
        const isAnt = actor instanceof Ant;
        const isSpider = actor instanceof Spider;
        const isFood = actor instanceof Food;
        const isNest = actor instanceof Nest;

        const isSmallSpider = isSpider && actor.type === spiderType.small;
        const isBigSpider = isSpider && actor.type === spiderType.large;

        if (isAnt) {
            cell.hasAnt = true;
        }

        if (isNest) {
            cell.hasNest = true;
        }

        if (isAnt && actor.hasFood) {
            cell.hasFoodScent = true;
        }

        if (actor.hasFood && cell.hasNest) {
            actor.deliverFood();
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
            actor.gather();
        }

        if (isAnt && cell.hasSpider) {
            actor.alert();
            actor.remove();
            cell.hasAlertScent = true;
        }

        if (isFood && cell.hasAnt) {
            actor.removeFood();
        }

        if (isSmallSpider && cell.hasBigSpider) {
            actor.remove();
        }
    }
}
