import { AnimationLoop } from "engine/modules/animation/loop";
import { Grid } from "./modules/draw/grid";
import { Canvas } from "./modules/draw/canvas";
import { currentResolution, x, y } from "common/util/center";
import { actorStore, cellStore, controls } from "./modules/actor/store";
import { Menu } from "ui/menu";
import { Point } from "./modules/draw/point";
import { Colors, IActor } from "common/model";
import { Cell } from "./modules/draw/cell";
import { mapIntersections } from "common/util/intersection";

export abstract class Engine extends AnimationLoop {
    public canvas: Canvas;
    public grid: Grid;
    public menu: Menu;
    private ctx: CanvasRenderingContext2D;

    constructor(resolution: Point) {
        super(resolution);
        this.canvas = new Canvas(currentResolution);
        this.grid = new Grid(this.canvas, currentResolution);
        this.menu = new Menu();
        this.ctx = this.canvas.getContext();
    }

    private renderCells() {
        cellStore.forEach((cell: Cell) => {
            actorStore.forEach(actor => {
                if (mapIntersections(cell, actor, this.grid.cellSize)) {
                    cell.actor = actor;
                    if (controls.debug) {
                        this.ctx.strokeStyle = Colors.debug;
                    }
                }
            });

            this.ctx.strokeRect(
                cell.x,
                cell.y,
                this.grid.cellSize,
                this.grid.cellSize
            );

            this.ctx.strokeStyle = Colors.grass;
        });

        this.ctx.strokeStyle = Colors.grass;
    }

    private renderActors() {
        const actors = Array.from(actorStore);

        actors.forEach((actor: IActor) => {
            const {
                width,
                height,
                graphics,
                frameIndex,
                numberOfFrames,
                coordinates,
                currentState,
            } = actor;

            let { currentRotation } = actor;

            if (graphics) {
                this.ctx.save();

                this.ctx.translate(x, y);

                this.ctx.rotate((Math.PI / 180) * (currentRotation += 1));

                this.ctx.drawImage(
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

                this.ctx.restore();
            } else {
                actor.draw(this.ctx);
            }
            actor.update();
        });
    }

    private clearCanvas() {
        // TODO: optimise
        this.canvas
            .getContext()
            .clearRect(0, 0, currentResolution.x, currentResolution.y);
    }

    public update() {
        if (!this.grid) return;
        this.clearCanvas();
        this.renderCells();
        this.renderActors();
    }
}
