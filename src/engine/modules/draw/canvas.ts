import { Point } from "./point";
import { currentResolution } from "common/util/center";

class Canvas {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor({ x, y }: Point) {
        const canvas = document.createElement("canvas");
        canvas.width = x;
        canvas.height = y;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        document.body.appendChild(canvas);
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getContext(): CanvasRenderingContext2D {
        return this.context;
    }
}

export const CanvasInstance = new Canvas(currentResolution);
