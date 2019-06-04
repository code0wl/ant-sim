import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";
import { ICell } from "./model";
import { Canvas } from "./canvas";
import { currentResolution } from "common/util/center";
import { controls } from "../actor/store";

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

    public getCell(map: IMap) {}

    public drawGrid() {
        const ctx = this.canvas.getContext();

        this.cells.forEach(({ end, start }: ICell) => {
            ctx.fillRect(start, end, this.cellSize, this.cellSize);
        });

        ctx.fillStyle = "#228B22";
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
