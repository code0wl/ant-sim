import { currentResolution } from "common/util/center";
import { Ant } from "game/actors/ant/ant";
import { antType } from "game/actors/ant/model";
import { Engine } from "engine/engine";
import { Point } from "engine/modules/draw/point";
import { Nest } from "./actors/nest/nest";
import { nestCoordinates } from "./actors/nest/model";
import { spiderType, ISpiderConfig } from "./actors/spider/model";
import { Spider } from "./actors/spider/spider";

export class Game extends Engine {
    public blackNest: Nest;
    public redNest: Nest;

    constructor(
        private antsPopulous = 5,
        resolution: Point = currentResolution
    ) {
        super(resolution);
        this.createNests();
        // this.createAnts();
        this.createSpiders([
            { spider: spiderType.large, coordinates: new Point(100, 200) },
            { spider: spiderType.small, coordinates: new Point(200, 200) },
        ]);
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
        this.blackNest = new Nest(
            new Point(nestCoordinates.black.x, nestCoordinates.black.y)
        );
        this.redNest = new Nest(
            new Point(nestCoordinates.red.x, nestCoordinates.red.y)
        );
    }
}
