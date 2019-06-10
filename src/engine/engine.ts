import { AnimationLoop } from "engine/modules/animation/loop";
import { Grid } from "./modules/draw/grid";
import { Canvas } from "./modules/draw/canvas";
import { currentResolution } from "common/util/center";
import { actorStore, cellStore, controls } from "./modules/actor/store";
import { Menu } from "ui/menu";
import { Point } from "./modules/draw/point";
import { Colors, IActor } from "common/model";
import { Cell } from "./modules/draw/cell";
import { mapIntersections } from "common/util/intersection";
import { Ant } from "game/actors/ant/ant";
import { Food } from "game/actors/food/food";
import { Spider } from "game/actors/spider/spider";

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
                    const isAnt = actor instanceof Ant;
                    const isSpider = actor instanceof Spider;
                    const isFood = actor instanceof Food;

                    if (isAnt && cell.hasFood) {
                        const ant = actor as Ant;
                        ant.gather();
                    }

                    if (isAnt && cell.hasSpider) {
                        const ant = actor as Ant;
                        ant.die();
                    }

                    if (isAnt) {
                        cell.hasAnt = true;
                    }

                    if (isFood) {
                        cell.hasFood = true;
                    }

                    if (isSpider) {
                        cell.hasSpider = true;
                    }

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
