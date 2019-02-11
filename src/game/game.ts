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
    }

    public preload() {
        new Ant(antType.red, "spritesheets/__black_ant_walk.png");
    }

    public update(): void {
    }
}
