import { Ant } from "actors/ant/ant.class";
import { antType } from "actors/ant/model";
import { Point } from "common/model";

export class AntFactory {
    constructor(
        private ant: Ant,
        private position: Point,
        private engine: Engine,
        private antType?: antType
    ) {}

    public getAnimation() {
    }
}
