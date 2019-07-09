import { Ant } from "game/actors/ant/ant";

export class Scene {
    constructor() {}

    antDeliversFood(ant: Ant) {
        ant.deliverFood();
    }
}
