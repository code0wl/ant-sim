import { Point } from "common/model";
import { currentResolution } from "common/util/center";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor({ x, y }: Point) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = x;
        this.canvas.height = y;
        this.canvas.classList.add("physics-canvas");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.context.fillStyle = "blue";
        console.log("created canvas");
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getContext(): CanvasRenderingContext2D {
        return this.context;
    }
}

export const canvas = new Canvas(currentResolution);
