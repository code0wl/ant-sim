import { AnimationLoop } from "engine/modules/animation/loop";
import { Grid } from "./modules/draw/grid";
import { Canvas } from "./modules/draw/canvas";
import { currentResolution, x } from "common/util/center";
import { actorStore, cellStore, controls } from "./modules/actor/store";
import { Menu } from "ui/menu";
import { Point } from "./modules/draw/point";
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

    constructor(resolution: Point) {
        super(resolution);
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

            this.ctx.strokeStyle = Colors.grass;
        });
    }

    private renderActors() {
        const actors = Array.from(actorStore);

        actors.forEach((actor: IActor) => {
            actor.isActive
                ? this.animateActor(actor)
                : actor.removeFromStore(actor);
            actor.update();
        });
    }

    private animateActor(actor: IActor) {
        const ctx = this.ctx;
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
        } else {
            actor.draw(ctx);
        }
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
