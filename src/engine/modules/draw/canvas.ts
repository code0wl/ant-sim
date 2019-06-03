import { Point } from "common/model";
import { Grid } from "./grid";

export class Canvas {
    public grid: Grid;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor({ x, y }: Point) {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.canvas.width = x;
        this.canvas.height = y;
        this.context = this.canvas.getContext("2d");
        this.grid = new Grid({ x, y });
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getContext(): CanvasRenderingContext2D {
        return this.context;
    }
}
