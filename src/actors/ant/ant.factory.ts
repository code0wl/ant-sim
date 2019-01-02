import { Vector } from "excalibur";
import { SpriteSheetResources } from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { antType } from "actors/ant/model";
import { longitude, latitude } from "common/util/center";

export class AntFactory {
    constructor(ant: Ant) {
        switch (ant.type) {
            case antType.red:
                ant.scale = new Vector(0.03, 0.03);

                ant.pos = new Vector(longitude, latitude);

                return SpriteSheetResources.antSheetWalkingRed.getAnimationForAll(
                    ant.gameInstance,
                    30
                );

            case antType.black:
                ant.scale = new Vector(0.03, 0.03);

                ant.pos = new Vector(longitude + 50, latitude);

                return SpriteSheetResources.antSheetWalkingBlack.getAnimationForAll(
                    ant.gameInstance,
                    30
                );
        }
    }
}
