import { LifeCycle } from "engine/model";
import { AnimationLoop } from "engine/modules/animation/loop";
import { Point } from "common/model";
import { Canvas } from "engine/modules/draw/canvas";

export abstract class Engine extends AnimationLoop implements LifeCycle {
    constructor(resolution: Point) {
        super(resolution);
        this.preload();
    }
    update() {}

    preload() {}
}
