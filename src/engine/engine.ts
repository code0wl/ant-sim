import { AnimationLoop } from "engine/modules/animation/loop";
import { Point } from "common/model";
import { LifeCycle } from "engine/model";
import { Grid } from "./modules/draw/grid";
import { Canvas } from "./modules/draw/canvas";
import { currentResolution } from "common/util/center";

export abstract class Engine extends AnimationLoop implements LifeCycle {
    public canvas: Canvas;
    public grid: Grid;
    constructor(resolution: Point) {
        super(resolution);
        this.canvas = new Canvas(currentResolution);
        this.grid = new Grid(this.canvas, currentResolution);
    }

    preload() {
        console.log("preloading");
    }
}
