import { LifeCycle } from "engine/model";
import { AnimationLoop } from "engine/modules/animation/loop";

export abstract class Engine extends AnimationLoop implements LifeCycle {
    create() {}

    update() {}

    preload() {}
}
