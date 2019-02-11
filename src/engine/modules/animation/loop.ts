import { Point } from "common/model";

export class AnimationLoop {
    public width: number;
    public height: number;

    constructor(resolution: Point) {
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
