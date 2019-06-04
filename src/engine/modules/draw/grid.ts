import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";
import { ICell } from "./model";

export class Grid {
    public cells: any = [];
    private cellSize: number = 20;

    constructor(public canvas: HTMLCanvasElement, dimensions: Point) {
        this.createGrid(dimensions);
        this.drawGrid();
    }

    public debug() {}

    // think of better type
    public intersections(elements: IAnimal[]) {
        // pass event when actors have intersected
    }

    public getCell(map: IMap) {}

    public drawGrid() {
        const ctx = this.canvas.getContext("2d");
        ctx.strokeStyle = "#006400";
        ctx.stroke();
        this.cells.forEach(({ end, start }: ICell) => {
            ctx.strokeRect(start, end, this.cellSize, this.cellSize);
        });
    }

    public createGrid({ x, y }: Point) {
        for (let i = 0; i <= y; i += this.cellSize) {
            for (let j = 0; j <= x; j += this.cellSize) {
                this.cells.push({
                    start: j,
                    end: i,
                });
            }
        }
    }
}
