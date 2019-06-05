import { IAnimal, Point } from "common/model";
import { Canvas } from "./canvas";
import { Cell } from "./cell";

export class Grid {
    public cells: any = [];
    private cellSize: number = 20;

    constructor(public canvas: Canvas, public dimensions: Point) {
        this.createGrid(this.dimensions);
        this.drawGrid();
    }

    public intersections(elements: IAnimal[]) {
        // pass event when actors have intersected
    }

    public drawGrid() {
        const ctx = this.canvas.getContext();

        this.cells.forEach(({ end, start }: Cell) => {
            ctx.fillRect(start, end, this.cellSize, this.cellSize);
        });

        ctx.fillStyle = "#228B22";
    }

    public createGrid({ x, y }: Point) {
        for (let i = 0; i <= x; i += this.cellSize) {
            for (let j = 0; j <= y; j += this.cellSize) {
                this.cells.push(new Cell(i, j));
            }
        }
    }
}
