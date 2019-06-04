import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";

export class Grid {
    gridSize: number = 50;
    constructor(public canvas: HTMLCanvasElement, dimensions: Point) {
        this.drawGrid(dimensions);
    }

    public debug() {}

    // think of better type
    public intersections(elements: IAnimal[]) {
        // pass event when actors have intersected
    }

    public getCell(map: IMap) {}

    private drawGrid({ x, y }: Point) {
        const ctx = this.canvas.getContext("2d");

        for (let i = 0; i < x; i += this.gridSize) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, y);
        }

        for (let i = 0; i < x; i += this.gridSize) {
            ctx.moveTo(0, i);
            ctx.lineTo(x, i);
        }
        ctx.strokeStyle = "#006400";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}
