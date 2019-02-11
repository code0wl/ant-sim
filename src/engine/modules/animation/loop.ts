import { Point } from "common/model";
import { Canvas } from "engine/modules/draw/canvas";

export class AnimationLoop extends Canvas {
    public width: number;
    public height: number;

    constructor(resolution: Point) {
        super(resolution);
        this.width = resolution.x;
        this.height = resolution.y;
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
