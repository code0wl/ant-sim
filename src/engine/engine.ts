import { currentResolution } from "common/util/center";
import { AnimationLoop } from "engine/modules/animation/loop";
import { Canvas } from "engine/modules/draw/canvas";

export class Engine extends AnimationLoop {
    public draw: Canvas;
    public animationLoop: AnimationLoop;

    constructor(resolution = currentResolution) {
        super(resolution);
    }

    public getAnimationLoop() {
        return this.animationLoop;
    }
}

export const engine = new Engine();
