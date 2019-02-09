import { Grid } from "engine/draw.grid";
import { Point } from "common/model";
import { currentResolution } from "common/util/center";

export class Game {
    public grid: Grid;

    constructor(resolution: Point = currentResolution) {
        console.log(resolution)
    }
}
