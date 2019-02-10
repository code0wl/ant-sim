import { Draw } from "engine/modules/draw/draw";
import { currentResolution } from "common/util/center";
import { AnimationLoop } from "engine/modules/animation/loop";

export class Engine {
    public draw: Draw;
    public animationLoop: AnimationLoop;

    constructor(resolution = currentResolution) {
        this.draw = new Draw(resolution);
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

    public stop() {}

    public log() {}

    public pause() {}
}

export const engine = new Engine();
