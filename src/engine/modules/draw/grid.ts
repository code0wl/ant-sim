import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";
import { ICell } from "./model";
import { Canvas } from "./canvas";

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

    public debugCells(ctx: CanvasRenderingContext2D) {
        const { x, y } = this.dimensions;

        for (let i = 0; i <= x; i += this.cellSize) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, y);
        }

        // rows: any
        for (let i = 0; i <= y; i += this.cellSize) {
            ctx.moveTo(0, i);
            ctx.lineTo(x, i);
        }

        ctx.strokeStyle = "#006400";

        ctx.stroke();
    }

    public getCell(map: IMap) {}

    public drawGrid() {
        const ctx = this.canvas.getContext();

        this.cells.forEach(({ end, start }: ICell) => {
            ctx.fillRect(start, end, this.cellSize, this.cellSize);
        });

        ctx.fillStyle = "#228B22";

        if (false) {
            this.debugCells(ctx);
        }
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
