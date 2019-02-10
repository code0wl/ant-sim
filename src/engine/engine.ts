import { currentResolution } from "common/util/center";
import { AnimationLoop } from "engine/modules/animation/loop";
import { Canvas } from "engine/modules/draw/canvas";

export class Engine {
    public draw: Canvas;
    public animationLoop: AnimationLoop;

    constructor(resolution = currentResolution) {
        this.draw = new Canvas(resolution);
        this.start();
    }

    public start() {
        const { width, height } = this.draw.getCanvas();
        this.animationLoop = new AnimationLoop(
            this.draw.getContext(),
            width,
            height
        );
    }

    public getAnimationLoop() {
        return this.animationLoop;
    }
}

export const engine = new Engine();
