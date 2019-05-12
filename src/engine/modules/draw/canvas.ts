import { Point } from "common/model";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor({ x, y }: Point) {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.canvas.width = x;
        this.canvas.height = y;
        this.canvas.style.backgroundColor = 'blue'
        this.context = this.canvas.getContext("2d");
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getContext(): CanvasRenderingContext2D {
        return this.context;
    }
}
