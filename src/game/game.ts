import { Grid } from "engine/modules/draw/grid";
import { Point } from "common/model";
import { currentResolution } from "common/util/center";
import { Ant } from "game/actors/ant/ant";
import { antType } from "game/actors/ant/model";
import { Engine } from "engine/engine";

export class Game extends Engine {
    public grid: Grid;

    constructor(resolution: Point = currentResolution) {
        super(resolution);

        // test
        new Ant(antType.black, [
            "ants/__black_ant_walk.png",
            "ants/__black_ant_idle.png",
            "ants/__black_ant_dead.png",
        ]);

        new Ant(antType.red, [
            "ants/__red_ant_walk.png",
            "ants/__red_ant_idle.png",
            "ants/__red_ant_dead.png",
        ]);
    }

    public update(): void {}
}
