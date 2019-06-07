import { currentResolution } from "common/util/center";
import { Ant } from "game/actors/ant/ant";
import { antType } from "game/actors/ant/model";
import { Engine } from "engine/engine";
import { spiderType } from "./actors/spider/model";
import { Spider } from "./actors/spider/spider";
import { Food } from "./actors/food/food";
import { Point } from "engine/modules/draw/point";
import { Nest } from "./actors/nest/nest";

export class Game extends Engine {
    constructor(resolution: Point = currentResolution) {
        super(resolution);

        // test
        new Ant(
            antType.black,
            { x: 100, y: 100 },
            {
                walk: "ants/__black_ant_walk-small.png",
                idle: "ants/__black_ant_idle-small.png",
                dead: "ants/__black_ant_dead-small.png",
            }
        );

        new Nest({ x: 10, y: 10 });

        new Nest({ x: currentResolution.x - 50, y: currentResolution.y - 50 });

        new Ant(
            antType.red,
            { x: 200, y: 100 },
            {
                walk: "ants/__red_ant_walk-small.png",
                idle: "ants/__red_ant_idle-small.png",
                dead: "ants/__red_ant_dead-small.png",
            }
        );

        new Spider(
            spiderType.large,
            { x: 300, y: 100 },
            {
                idle:
                    "spiders/spider1/spritesheets/sheet_spider_idle-small.png",
                walk:
                "spiders/spider1/spritesheets/sheet_spider_walk-small.png",
                dead: "spiders/spider1/spritesheets/sheet_spider_die-small.png",
            }
        );

        new Spider(
            spiderType.small,
            { x: 0, y: 200 },
            {
                idle:
                    "spiders/spider2/spritesheets/sheet_spider_idle-small.png",
                walk:
                    "spiders/spider2/spritesheets/sheet_spider_walk-small.png",
            }
        );
    }
}
