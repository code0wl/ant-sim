import { AnimationLoop } from "engine/modules/animation/loop";
import { Grid } from "./modules/draw/grid";
import { Canvas } from "./modules/draw/canvas";
import { currentResolution } from "common/util/center";
import { actorStore, cellStore, controls } from "./modules/actor/store";
import { Menu } from "ui/menu";
import { Colors, IActor } from "common/model";
import { Cell } from "./modules/draw/cell";
import { mapIntersections } from "common/util/intersection";
import { Director } from "./modules/director/director";

export abstract class Engine extends AnimationLoop {
    public canvas: Canvas;
    public grid: Grid;
    public menu: Menu;
    private ctx: CanvasRenderingContext2D;
    private director: Director;

    constructor(fps: number) {
        super(fps);
        this.canvas = new Canvas(currentResolution);
        this.grid = new Grid(this.canvas, currentResolution);
        this.menu = new Menu();
        this.director = new Director();
        this.ctx = this.canvas.getContext();
    }

    private renderCells() {
        cellStore.forEach((cell: Cell) => {
            actorStore.forEach((actor: IActor) => {
                if (mapIntersections(cell, actor, this.grid.cellSize)) {
                    this.director.handleEvent(cell, actor);
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

            // this.cellColor(cell);
            this.ctx.strokeStyle = Colors.grass
        });
    }

    // private cellColor(cell: Cell) {
    //     this.ctx.strokeStyle = cell.hasFoodScent
    //         ? Colors.foodPheromone
    //         : Colors.grass;
    // }

    private renderActors() {
        const actors = Array.from(actorStore);

        actors.forEach((actor: IActor) => {
            actor.isActive
                ? actor.animate(this.ctx)
                : actor.removeFromStore(actor);
            actor.update();
        });
    }

    private clearCanvas() {
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
