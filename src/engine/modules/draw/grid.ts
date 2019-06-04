import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";

export class Grid {
    gridSize: number = 20;
    // add interface
    cells: any;

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
        const cols: any = [];
        const rows = [];

        // cols
        for (let i = 0, j = 0; i <= x; i += this.gridSize) {
            cols[j] = j;
            ctx.moveTo(i, 0);
            ctx.lineTo(i, y);
            j += 1;
        }

        // rows: any
        for (let i = 0, j = 0; i <= y; i += this.gridSize) {
            rows[j] = j;
            ctx.moveTo(0, i);
            ctx.lineTo(x, i);
            j += 1;
        }

        ctx.strokeStyle = "#006400";

        ctx.stroke();

        // this.cells = [...new Set(rows.concat(cols))];

        // console.log(this.cells);
    }
}
