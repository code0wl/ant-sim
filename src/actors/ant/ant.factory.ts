import { Vector, Engine } from "excalibur";
import { SpriteSheetResourcesMoving } from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { antType } from "actors/ant/model";
import { longitude, latitude } from "common/util/center";

export class AntFactory {
    constructor(ant: Ant, engine: Engine) {
        // set ant scale
        ant.scale = new Vector(0.03, 0.03);

        // set ant animation speed
        const fps = 30;

        // check which ant needs to be created
        switch (ant.type) {
            case antType.red:
                ant.pos = new Vector(longitude, latitude);

                return SpriteSheetResourcesMoving.antSheetWalkingRed.getAnimationForAll(
                    engine,
                    fps
                );

            case antType.black:
                ant.pos = new Vector(longitude + 50, latitude);

                return SpriteSheetResourcesMoving.antSheetWalkingBlack.getAnimationForAll(
                    engine,
                    fps
                );
        }
    }
}
