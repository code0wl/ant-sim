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
    constructor(
        private antsPopulous = 1,
        resolution: Point = currentResolution
    ) {
        super(resolution);
        this.createNests();
        this.createAnts();
        this.createFood();
        this.createSpiders([
            { spider: spiderType.large, coordinates: new Point(100, 600) },
            { spider: spiderType.small, coordinates: new Point(500, 300) }
        ]);
    }

    private createFood() {
        new Food(new Point(150, 30));
        new Food(new Point(300, 30));
        new Food(new Point(400, 30));
        new Food(new Point(500, 30));

        new Food(new Point(350, 100));
        new Food(new Point(150, 100));
        new Food(new Point(100, 100));
        new Food(new Point(100, 100));
        new Food(new Point(400, 100));
        new Food(new Point(500, 100));
    }

    private createAnts() {
        let i = 0;
        while (i < this.antsPopulous) {
            new Ant(antType.black);
            new Ant(antType.red);
            i++;
        }
    }

    private createSpiders(spiderConfig: ISpiderConfig[]) {
        spiderConfig.forEach(({ spider, coordinates }) => {
            new Spider(spider, coordinates);
        });
    }

    private createNests() {
        new Nest("red");
        new Nest("black");
    }
}
