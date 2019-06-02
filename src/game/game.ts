import { Grid } from "engine/modules/draw/grid";
import { Point, currentState } from "common/model";
import { currentResolution } from "common/util/center";
import { Ant } from "game/actors/ant/ant";
import { antType } from "game/actors/ant/model";
import { Engine } from "engine/engine";

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
            currentState.walk,
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
            currentState.walk,
            { x: 200, y: 200 }
        );
    }

    public update(): void {}
}
