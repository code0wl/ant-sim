import { spiderType } from "actors/spider/model";
import { Vector, Engine } from "excalibur";
import {
    SpriteSheetResourcesMoving,
    SpriteSheetResourcesIdle,
} from "common/resources";
import { Spider } from "actors/spider/spider.class";
import { Coordinates, IAnimationType } from "common/model";

export class SpiderFactory {
    constructor(
        private spider: Spider,
        private position: Coordinates,
        private engine: Engine
    ) {}

    public getAnimation(): IAnimationType[] {
        switch (this.spider.type) {
            case spiderType.extra:
                this.spider.scale = new Vector(0.45, 0.45);

                this.spider.pos = new Vector(150, 150);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.spiderSheetWalkingExtra.getAnimationForAll(
                            this.engine,
                            150
                        ),
                        idle: SpriteSheetResourcesMoving.spiderSheetWalkingExtra.getAnimationForAll(
                            this.engine,
                            150
                        ),
                    },
                ];

            case spiderType.small:
                this.spider.scale = new Vector(0.15, 0.15);

                this.spider.pos = new Vector(500, 150);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.spiderSheetWalkingSmall.getAnimationForAll(
                            this.engine,
                            30
                        ),
                        idle: SpriteSheetResourcesIdle.spiderSheetIdleSmall.getAnimationForAll(
                            this.engine,
                            30
                        ),
                    },
                ];

            case spiderType.medium:
                this.spider.scale = new Vector(0.25, 0.25);

                this.spider.pos = new Vector(150, 500);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.spiderSheetWalkingMedium.getAnimationForAll(
                            this.engine,
                            60
                        ),
                        idle: SpriteSheetResourcesMoving.spiderSheetWalkingMedium.getAnimationForAll(
                            this.engine,
                            60
                        ),
                    },
                ];

            case spiderType.larger:
                this.spider.scale = new Vector(0.35, 0.35);

                this.spider.pos = new Vector(500, 500);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.spiderSheetWalkingLarger.getAnimationForAll(
                            this.engine,
                            110
                        ),
                        idle: SpriteSheetResourcesMoving.spiderSheetWalkingLarger.getAnimationForAll(
                            this.engine,
                            110
                        ),
                    },
                ];
        }
    }
}
