import { Canvas } from "./canvas";
import { Cell } from "./cell";
import { Point } from "./point";
import { Colors } from "common/model";

export class Grid {
    public cells: any = [];
    private cellSize: number = 20;

    constructor(public canvas: Canvas, public dimensions: Point) {
        this.createGrid(this.dimensions);
        this.drawGrid();
    }

    public drawGrid() {
        const ctx = this.canvas.getContext();

        this.cells.forEach(({ end, start }: Cell) => {
            ctx.strokeRect(start, end, this.cellSize, this.cellSize);
        });

        ctx.strokeStyle = Colors.grass
    }

    public createGrid({ x, y }: Point) {
        for (let i = 0; i <= x; i += this.cellSize) {
            for (let j = 0; j <= y; j += this.cellSize) {
                this.cells.push(new Cell(i, j));
            }
        }
    }
}
