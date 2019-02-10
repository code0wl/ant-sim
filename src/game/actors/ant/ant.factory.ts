import { Ant } from "game/actors/ant/ant";

export class AntFactory {
    constructor(
        private ant: Ant,
        private position: Point,
        private antType?: antType
    ) {}

    public getAnimation() {
    }
}
