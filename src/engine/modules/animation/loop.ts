import { Point } from "common/model";
import { Canvas } from "../draw/canvas";

export class AnimationLoop {
    public width: number;
    public height: number;
    public canvas: Canvas;

    constructor({ x, y }: Point) {
        this.animationLoop();
    }

    public update() {}

    private animationLoop() {
        requestAnimationFrame(() => this.animationLoop());
        this.update();
    }
}
