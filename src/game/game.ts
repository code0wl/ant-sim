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
        new Ant(
            antType.red,
            "https://mdn.mozillademos.org/files/5397/rhino.jpg"
        );
    }

    public update(): void {}
}
