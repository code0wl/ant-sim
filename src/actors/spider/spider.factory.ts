import { spiderType } from "actors/spider/model";
import { Vector, Engine } from "excalibur";
import {
    SpriteSheetResourcesMoving,
    SpriteSheetResourcesIdle,
} from "common/resources";
import { Spider } from "actors/spider/spider.class";
import { IAnimationType, Point } from "common/model";

export class SpiderFactory {
    constructor(
        private spider: Spider,
        private position: Point,
        private engine: Engine
    ) {}

    public getAnimation(): IAnimationType[] {
        switch (this.spider.type) {
            case spiderType.extra:
                this.spider.scale = new Vector(1.5, 1.5);

                this.spider.pos = new Vector(150, 150);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.spiderSheetWalkingExtra.getAnimationForAll(
                            this.engine,
                            150
                        ),
                        idle: SpriteSheetResourcesIdle.spiderSheetIdleExtra.getAnimationForAll(
                            this.engine,
                            150
                        ),
                    },
                ];

            case spiderType.small:
                this.spider.scale = new Vector(0.5, 0.5);
                this.spider.pos = new Vector(500, 150);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.spiderSheetWalkingSmall.getAnimationForAll(
                            this.engine,
                            30
                        ),
                        idle: SpriteSheetResourcesIdle.spiderSheetIdleSmall.getAnimationForAll(
                            this.engine,
                            80
                        ),
                    },
                ];

            case spiderType.medium:
                this.spider.scale = new Vector(0.75, 0.75);

                this.spider.pos = new Vector(150, 500);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.spiderSheetWalkingMedium.getAnimationForAll(
                            this.engine,
                            60
                        ),
                        idle: SpriteSheetResourcesIdle.spiderSheetIdleMedium.getAnimationForAll(
                            this.engine,
                            60
                        ),
                    },
                ];

            case spiderType.larger:
                this.spider.pos = new Vector(500, 500);

                return [
                    {
                        walking: SpriteSheetResourcesMoving.spiderSheetWalkingLarger.getAnimationForAll(
                            this.engine,
                            110
                        ),
                        idle: SpriteSheetResourcesIdle.spiderSheetIdleLarger.getAnimationForAll(
                            this.engine,
                            110
                        ),
                    },
                ];
        }
    }
}
