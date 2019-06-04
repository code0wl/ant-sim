import { Point } from "common/model";

export class AnimationLoop {
    public width: number;
    public height: number;

    constructor({ x, y }: Point) {
        this.animationLoop();
    }

    public update() {
        // implemented by engine
    }

    private animationLoop() {
        requestAnimationFrame(() => this.animationLoop());
        this.update();
    }
}
