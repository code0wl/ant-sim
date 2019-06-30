import { Ant } from "game/actors/ant/ant";
import { antType } from "game/actors/ant/model";
import { Engine } from "engine/engine";
import { Point } from "engine/modules/draw/point";
import { Nest } from "./actors/nest/nest";
import { spiderType, ISpiderConfig } from "./actors/spider/model";
import { Spider } from "./actors/spider/spider";
import { Food } from "./actors/food/food";

export class Game extends Engine {
    private blackNest: Nest;
    private redNest: Nest;
    constructor() {
        super();
        this.createFood();
        this.createNests(2);
        this.createSpiders([
            { spider: spiderType.large, coordinates: new Point(100, 600) },
            { spider: spiderType.small, coordinates: new Point(500, 300) },
        ]);
    }

    private createFood() {
        new Food(new Point(50, 90));
    }

    public updateWorld() {
        if (!this.blackNest || !this.redNest) return;
        while (this.blackNest.totalPopulation < this.blackNest.foodStores) {
            new Ant(antType.black, this.blackNest);
        }

        while (this.redNest.totalPopulation < this.redNest.foodStores) {
            new Ant(antType.red, this.redNest);
        }
    }

    private createSpiders(spiderConfig: ISpiderConfig[]) {
        spiderConfig.forEach(({ spider, coordinates }) => {
            new Spider(spider, coordinates);
        });
    }

    private createNests(startPopulation: number) {
        this.blackNest = new Nest("red", startPopulation);
        this.redNest = new Nest("black", startPopulation);
    }
}
