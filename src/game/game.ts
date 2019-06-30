import { currentResolution } from "common/util/center";
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
    constructor(
        private antsPopulous = 1,
        resolution: Point = currentResolution
    ) {
        super(resolution);
        this.createFood();
        this.createNests();
        this.createAnts();
        this.createSpiders([
            { spider: spiderType.large, coordinates: new Point(100, 600) },
            { spider: spiderType.small, coordinates: new Point(500, 300) },
        ]);
    }

    private createFood() {
        new Food(new Point(50, 100));
    }

    private createAnts() {
        let i = 0;
        while (i < this.antsPopulous) {
            new Ant(antType.black, this.blackNest);
            new Ant(antType.red, this.redNest);
            i++;
        }
    }

    private createSpiders(spiderConfig: ISpiderConfig[]) {
        spiderConfig.forEach(({ spider, coordinates }) => {
            new Spider(spider, coordinates);
        });
    }

    private createNests() {
        this.blackNest = new Nest("red");
        this.redNest = new Nest("black");
    }
}
