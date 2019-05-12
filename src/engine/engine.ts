import { AnimationLoop } from "engine/modules/animation/loop";
import { Point } from "common/model";
import { LifeCycle } from "engine/model";

export abstract class Engine extends AnimationLoop implements LifeCycle {
    constructor(resolution: Point) {
        super(resolution);
    }

    preload() {}

    update() {
        console.log('updating')
    }
}
