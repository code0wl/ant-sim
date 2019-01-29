import { Grid } from "game/grid";
import { Point } from "common/model";
import { currentResolution } from "common/util/center";

export class Game extends Engine {
    public grid: Grid;

    constructor(resolution: Point = currentResolution) {
        super()
        console.log(resolution)
    }
}
