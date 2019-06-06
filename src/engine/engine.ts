import { AnimationLoop } from "engine/modules/animation/loop";
import { Grid } from "./modules/draw/grid";
import { Canvas } from "./modules/draw/canvas";
import { currentResolution } from "common/util/center";
import { actorStore, cellStore } from "./modules/actor/store";
import { Menu } from "ui/menu";
import { Point } from "./modules/draw/point";
import { Colors } from "common/model";
import { Cell } from "./modules/draw/cell";
import { Actor } from "./modules/actor/actor";

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
        setTimeout(() => {
            this.mapIntersections();
        }, 2000);
    }

    private renderCells() {
        const cells = Array.from(cellStore);

        cells.forEach(({ end, start }: Cell) => {
            this.ctx.strokeRect(
                start,
                end,
                this.grid.cellSize,
                this.grid.cellSize
            );
        });

        this.ctx.strokeStyle = Colors.grass;
    }

    private renderActors() {
        const actors = Array.from(actorStore);

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

            if (graphics) {
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

    private mapIntersections() {
        const actors = Array.from(actorStore);
        const cells = Array.from(cellStore);

        actors.forEach((actor: Actor) =>
            cells.find((cell: Cell) => {
                if (
                    actor.coordinates.y <= cell.start && actor.coordinates.y >= cell.start &&
                    actor.coordinates.x <= cell.end && actor.coordinates.x <= cell.end
                ) {
                    Object.assign(cell, actor);
                }
            })
        );

        console.log(cells);
    }

    public update(): void {
        if (!this.grid) return;
        this.clearCanvas();
        this.renderCells();
        this.renderActors();
    }
}
