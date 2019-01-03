import { Vector, Engine } from "excalibur";
import {
    SpriteSheetResourcesMoving,
    SpriteSheetResourcesIdle,
} from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { antType } from "actors/ant/model";
import { longitude, latitude } from "common/util/center";
import { Coordinates } from "common/model";

export class AntFactory {
    constructor(
        private ant: Ant,
        private position: Coordinates,
        private engine: Engine
    ) {}

    public getAnimation() {
        // set ant scale
        this.ant.scale = new Vector(0.03, 0.03);

        // set ant animation speed
        const fps = 30;

        // check which ant needs to be created
        switch (this.ant.type) {
            case antType.red:
                this.ant.pos = new Vector(longitude, latitude);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.antSheetWalkingRed.getAnimationForAll(
                            this.engine,
                            fps
                        ),
                        idle: SpriteSheetResourcesIdle.antSheetIdleRed.getAnimationForAll(
                            this.engine,
                            150
                        ),
                    },
                ];

            case antType.black:
                this.ant.pos = new Vector(longitude + 50, latitude);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.antSheetWalkingBlack.getAnimationForAll(
                            this.engine,
                            fps
                        ),
                        idle: SpriteSheetResourcesIdle.antSheetIdleBlack.getAnimationForAll(
                            this.engine,
                            fps
                        ),
                    },
                ];
        }
    }
}
