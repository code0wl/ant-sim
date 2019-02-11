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

    public update() {
        // overloaded by Engine
    }

    private animationLoop() {
        requestAnimationFrame(() => this.animationLoop());
        this.update();
    }
}
