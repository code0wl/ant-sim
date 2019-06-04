import { Grid } from "engine/modules/draw/grid";
import { Point } from "common/model";
import { currentResolution } from "common/util/center";
import { Ant } from "game/actors/ant/ant";
import { antType } from "game/actors/ant/model";
import { Engine } from "engine/engine";
import { spiderType } from "./actors/spider/model";
import { Spider } from "./actors/spider/spider";
import { actorStore } from "engine/modules/actor/store";

export class Game extends Engine {
    public grid: Grid;

    constructor(resolution: Point = currentResolution) {
        super(resolution);

        // test
        new Ant(
            antType.black,
            {
                walk: "ants/__black_ant_walk-small.png",
                idle: "ants/__black_ant_idle-small.png",
                dead: "ants/__black_ant_dead-small.png",
                attack: "",
            },
            { x: 100, y: 100 }
        );

        new Ant(
            antType.red,
            {
                walk: "ants/__red_ant_walk-small.png",
                idle: "ants/__red_ant_idle-small.png",
                dead: "ants/__red_ant_dead-small.png",
                attack: "",
            },
            { x: 200, y: 100 }
        );

        new Spider(
            spiderType.large,
            {
                walk: "spiders/spider1/spritesheets/sheet_spider_walk-small.png",
                idle: "spiders/spider1/spritesheets/sheet_spider_idle-small.png",
                dead: "spiders/spider1/spritesheets/sheet_spider_die-small.png",
                attack: "",
            },
            { x: 300, y: 100 }
        );

        new Spider(
            spiderType.small,
            {
                walk: "spiders/spider2/spritesheets/sheet_spider_walk-small.png",
                idle: "spiders/spider2/spritesheets/sheet_spider_idle-small.png",
                dead: "spiders/spider2/spritesheets/sheet_spider_die-small.png",
                attack: "spiders/spider2/spritesheets/sheet_spider_attack-small.png",
            },
            { x: 400, y: 100 }
        );
    }

    public renderActors() {
        const actors = Array.from(actorStore);

        actors.forEach(actor => {
            const {
                width,
                height,
                graphics,
                frameIndex,
                numberOfFrames,
                coordinates,
                currentState,
            } = actor;

            this.canvas
                .getContext()
                .clearRect(coordinates.x, coordinates.y, width, height);

            this.canvas
                .getContext()
                .drawImage(
                    graphics[currentState].image,
                    (frameIndex * width) / numberOfFrames,
                    0,
                    width / numberOfFrames,
                    height,
                    coordinates.x,
                    coordinates.y,
                    width / numberOfFrames,
                    height
                );
            actor.update();
        });
    }

    public update(): void {
        this.renderActors();
    }
}
