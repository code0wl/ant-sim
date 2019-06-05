import { AnimationLoop } from "engine/modules/animation/loop";
import { Point } from "common/model";
import { Grid } from "./modules/draw/grid";
import { Canvas } from "./modules/draw/canvas";
import { currentResolution } from "common/util/center";
import { actorStore } from "./modules/actor/store";
import { Menu } from "ui/menu";

export abstract class Engine extends AnimationLoop {
    public canvas: Canvas;
    public grid: Grid;
    public menu: Menu;

    constructor(resolution: Point) {
        super(resolution);
        this.canvas = new Canvas(currentResolution);
        this.grid = new Grid(this.canvas, currentResolution);
        this.menu = new Menu();
    }

    clearCanvas() {
        this.canvas
            .getContext()
            .clearRect(0, 0, currentResolution.x, currentResolution.y);
    }

    public renderActors() {
        if (!this.canvas) return;
        const actors = Array.from(actorStore);

        const ctx = this.canvas.getContext();

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

            ctx.drawImage(
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
        if (!this.grid) return;
        this.clearCanvas();
        this.grid.drawGrid();
        this.renderActors();
    }
}
