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
            cell.emptyCell();

            actorStore.forEach((actor: IActor) => {
                if (mapIntersections(cell, actor, this.grid.cellSize)) {
                    this.director.handleEvent(cell, actor);
                }
                this.isDebugEnabled(cell);
            });

            this.ctx.strokeRect(
                cell.x,
                cell.y,
                this.grid.cellSize,
                this.grid.cellSize
            );

            this.ctx.strokeStyle = Colors.grass;

        });
    }

    private isDebugEnabled(cell: Cell) {
        if (controls.debug) {
            this.ctx.strokeStyle = Colors.debug;

            if (cell.spider) {
                this.ctx.strokeStyle = Colors.spider;
            }

            if (cell.ant) {
                this.ctx.strokeStyle = Colors.blackAnt;
            }

            if (cell.food) {
                this.ctx.strokeStyle = Colors.food;
            }

            if (cell.hasPhermones) {
                this.ctx.strokeStyle = Colors.foodPheromone;
            }
        }
    }

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
