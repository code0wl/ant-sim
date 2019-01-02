import { spiderType } from "actors/spider/model";
import { Vector, Engine } from "excalibur";
import { SpriteSheetResourcesMoving } from "common/resources";
import { Spider } from "actors/spider/spider.class";

export class SpiderFactory {
    constructor(spider: Spider, engine: Engine) {
        switch (spider.type) {
            case spiderType.extra:
                spider.scale = new Vector(0.45, 0.45);

                spider.pos = new Vector(150, 150);

                return SpriteSheetResourcesMoving.spiderSheetWalkingExtra.getAnimationForAll(
                    engine,
                    150
                );

            case spiderType.small:
                spider.scale = new Vector(0.15, 0.15);

                spider.pos = new Vector(500, 150);

                return SpriteSheetResourcesMoving.spiderSheetWalkingSmall.getAnimationForAll(
                    engine,
                    30
                );

            case spiderType.medium:
                spider.scale = new Vector(0.25, 0.25);

                spider.pos = new Vector(150, 500);

                return SpriteSheetResourcesMoving.spiderSheetWalkingMedium.getAnimationForAll(
                    engine,
                    60
                );

            case spiderType.larger:
                spider.scale = new Vector(0.35, 0.35);

                spider.pos = new Vector(500, 500);

                return SpriteSheetResourcesMoving.spiderSheetWalkingLarger.getAnimationForAll(
                    engine,
                    110
                );
        }
    }
}
