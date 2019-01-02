import { Vector } from "excalibur";
import { SpriteSheetResources } from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { antType } from "actors/ant/model";
import { longitude, latitude } from "common/util/center";

export class AntFactory {
    constructor(ant: Ant) {
        let animationWalking;

        switch (ant.type) {
            case antType.red:
                ant.scale = new Vector(0.03, 0.03);

                ant.pos = new Vector(longitude, latitude);

                animationWalking = SpriteSheetResources.antSheetWalkingRed.getAnimationForAll(
                    ant.gameInstance,
                    30
                );

                break;

            case antType.black:
                ant.scale = new Vector(0.03, 0.03);

                ant.pos = new Vector(longitude + 50, latitude);

                animationWalking = SpriteSheetResources.antSheetWalkingBlack.getAnimationForAll(
                    ant.gameInstance,
                    30
                );

                break;
        }
        ant.addDrawing("antWalking", animationWalking);
    }
}
