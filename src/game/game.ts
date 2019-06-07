import { currentResolution } from "common/util/center";
import { Ant } from "game/actors/ant/ant";
import { antType } from "game/actors/ant/model";
import { Engine } from "engine/engine";
import { Point } from "engine/modules/draw/point";
import { Nest } from "./actors/nest/nest";
import { nestCoordinates } from "./actors/nest/model";

export class Game extends Engine {
    public blackNest: Nest;
    public redNest: Nest;

    constructor(resolution: Point = currentResolution) {
        super(resolution);
        this.createNests();

        // test
        new Ant(antType.black, {
            walk: "ants/__black_ant_walk-small.png",
            idle: "ants/__black_ant_idle-small.png",
            dead: "ants/__black_ant_dead-small.png",
        });

        new Ant(antType.red, {
            walk: "ants/__red_ant_walk-small.png",
            idle: "ants/__red_ant_idle-small.png",
            dead: "ants/__red_ant_dead-small.png",
        });

        // new Spider(
        //     spiderType.large,
        //     { x: 300, y: 100 },
        //     {
        //         idle:
        //             "spiders/spider1/spritesheets/sheet_spider_idle-small.png",
        //         walk:
        //             "spiders/spider1/spritesheets/sheet_spider_walk-small.png",
        //         dead: "spiders/spider1/spritesheets/sheet_spider_die-small.png",
        //     }
        // );
    }

    createNests() {
        this.blackNest = new Nest(
            new Point(nestCoordinates.black.x, nestCoordinates.black.y)
        );
        this.redNest = new Nest(
            new Point(nestCoordinates.red.x, nestCoordinates.red.y)
        );
    }
}
