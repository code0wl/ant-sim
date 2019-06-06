import { Canvas } from "./canvas";
import { Cell } from "./cell";
import { Point } from "./point";
import { cellStore } from "../actor/store";

export class Grid {
    public cellSize: number = 20;

    constructor(public canvas: Canvas, public dimensions: Point) {
        this.createGrid(this.dimensions);
    }

    public createGrid({ x, y }: Point) {
        for (let i = 0; i <= x; i += this.cellSize) {
            for (let j = 0; j <= y; j += this.cellSize) {
                cellStore.add(new Cell(i, j));
            }
        }
    }
}
