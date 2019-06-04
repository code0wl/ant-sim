import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";
import { ICell } from "./model";
import { Canvas } from "./canvas";

export class Grid {
    public cells: any = [];
    private cellSize: number = 20;

    constructor(public canvas: Canvas, dimensions: Point) {
        this.createGrid(dimensions);
        this.drawGrid();
    }

    public intersections(elements: IAnimal[]) {
        // pass event when actors have intersected
    }

    public getCell(map: IMap) {}

    public drawGrid(color = "#228B22") {
        const ctx = this.canvas.getContext();
        ctx.fillStyle = color;
        ctx.strokeStyle = "#006400";
        ctx.stroke();

        this.cells.forEach(({ end, start }: ICell) => {
            ctx.fillRect(start, end, this.cellSize, this.cellSize);
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
