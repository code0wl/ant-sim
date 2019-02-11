import { engine } from "engine/engine";
import { Canvas } from "engine/modules/draw/canvas";
import { Point } from "common/model";

export class AnimationLoop {
    public width: number;
    public height: number;

    protected draw: Canvas;

    constructor(resolution: Point) {
        this.width = resolution.x;
        this.height = resolution.y;
        this.draw = new Canvas(resolution);
        this.animationLoop();
    }

    protected update() {
        engine.draw.getContext().clearRect(0, 0, this.width, this.height);
    }

    private animationLoop() {
        requestAnimationFrame(() => this.animationLoop());
        this.update();
    }
}
