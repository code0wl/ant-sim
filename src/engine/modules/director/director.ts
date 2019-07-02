import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";
import { Food } from "game/actors/food/food";
import { Cell } from "../draw/cell";
import { Actor } from "../actor/actor";
import { spiderType } from "game/actors/spider/model";

// gives the actions required for actors to act accordingly to their scripts ;)
export class Director {
    handleEvent(cell: Cell, actor: Actor) {
        // change engine to make big eat small
        const isAnt = actor instanceof Ant;
        const isSpider = actor instanceof Spider;
        const isFood = actor instanceof Food;

        const isSmallSpider = isSpider && actor.type === spiderType.small;
        const isBigSpider = isSpider && actor.type === spiderType.large;

        if (isAnt) {
            cell.hasAnt = true;
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
            const ant = actor as Ant;
            ant.gather();
        }

        if (isFood && cell.hasAnt) {
            actor.remove();
        }

        if (isAnt && cell.hasSpider) {
            actor.remove();
        }

        if (isSmallSpider && cell.hasBigSpider) {
            actor.remove();
        }
    }
}
