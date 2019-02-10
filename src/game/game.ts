import { Grid } from "engine/modules/draw/grid";
import { Point } from "common/model";
import { currentResolution } from "common/util/center";
import { Engine } from "engine/engine";

export class Game extends Engine {
    public grid: Grid;

    constructor(resolution: Point = currentResolution) {
        console.log(resolution)
    }
}
