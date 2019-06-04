import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";

export class Grid {
    gridSize: number = 40;
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
        const rows = [];
        const cols = [];

        for (let i = 0, j = 0; i < x; i += this.gridSize) {
            cols[j] = { col: j, start: {}, end: {} };
            ctx.moveTo(i, 0);
            ctx.lineTo(i, y);
            j += 1;
        }

        for (let i = 0, j = 0; i < y; i += this.gridSize) {
            rows[j] = { row: j, start: {}, end: {} };
            ctx.moveTo(0, i);
            ctx.lineTo(x, i);
            j += 1;
        }
        ctx.strokeStyle = "#006400";
        ctx.stroke();

        console.log(rows);
        console.log(cols);
    }
}
