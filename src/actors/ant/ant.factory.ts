import { Vector, SpriteSheet } from "excalibur";
import { Resources } from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { antType } from "actors/ant/model";
import { longitude, latitude } from "common/util/center";

export class AntFactory {
    constructor(ant: Ant) {
        let antSheetWalking;
        let animationWalking;

        switch (ant.type) {
            case antType.red:
                ant.scale = new Vector(0.05, 0.05);

                ant.pos = new Vector(longitude, latitude);

                antSheetWalking = new SpriteSheet(
                    Resources.redAntWalking,
                    5,
                    3,
                    540,
                    765
                );

                animationWalking = antSheetWalking.getAnimationForAll(
                    ant.gameInstance,
                    150
                );

                break;

            case antType.black:
                ant.scale = new Vector(0.45, 0.45);

                ant.pos = new Vector(150, 150);

                antSheetWalking = new SpriteSheet(
                    Resources.blackAntWalking,
                    5,
                    3,
                    540,
                    765
                );

                animationWalking = antSheetWalking.getAnimationForAll(
                    ant.gameInstance,
                    150
                );

                break;
        }
        ant.addDrawing("spiderWalkin", animationWalking);
    }
}
