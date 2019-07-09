import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";
import { Food } from "game/actors/food/food";
import { Cell } from "../draw/cell";
import { Nest } from "game/actors/nest/nest";
import { IActor } from "common/model";
import { Scene } from "./scene";

// gives the actions required for actors to act accordingly to their scripts ;)
export class Director {
    private scene: Scene;

    constructor() {
        this.scene = new Scene();
    }
    handleEvent(cell: Cell, actor: IActor) {
        const isAnt = actor instanceof Ant;
        const isSpider = actor instanceof Spider;
        const isFood = actor instanceof Food;
        const isNest = actor instanceof Nest;

        const food = <Food>actor;
        const ant = <Ant>actor;
        const nest = <Nest>actor;
        const spider = <Spider>actor;

        if (ant && cell.ant && ant.type !== cell.ant.type) {
            const ants = [ant, cell.ant];
            const loser = ants[Math.floor(Math.random() * ants.length)];
            loser.die();
        }

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
            ant.die();
        }

        if (ant.hasFood) {
            cell.hasPhermones = true;
            cell.foodScent = ant.food;
            setTimeout(() => {
                cell.hasPhermones = false;
                cell.foodScent = null;
            }, 10000);
        }

        if (isAnt && cell.hasPhermones) {
            ant.hasScent = true;
            ant.food = cell.foodScent;
        }

        if (ant.hasFood && cell.nest) {
            this.scene.antDeliversFood(ant);
        }
    }
}
