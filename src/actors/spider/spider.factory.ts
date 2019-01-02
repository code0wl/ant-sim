import { spiderType } from "actors/spider/model";
import { Vector } from "excalibur";
import { SpriteSheetResources } from "common/resources";
import { Spider } from "actors/spider/spider.class";

export class SpiderFactory {
    constructor(spider: Spider) {
        let animationWalking;

        switch (spider.type) {
            case spiderType.extra:
                spider.scale = new Vector(0.45, 0.45);

                spider.pos = new Vector(150, 150);

                animationWalking = SpriteSheetResources.spiderSheetWalkingExtra.getAnimationForAll(
                    spider.gameInstance,
                    150
                );

                break;

            case spiderType.small:
                spider.scale = new Vector(0.15, 0.15);

                spider.pos = new Vector(500, 150);

                animationWalking = SpriteSheetResources.spiderSheetWalkingSmall.getAnimationForAll(
                    spider.gameInstance,
                    30
                );
                break;

            case spiderType.medium:
                spider.scale = new Vector(0.25, 0.25);

                spider.pos = new Vector(150, 500);

                animationWalking = SpriteSheetResources.spiderSheetWalkingMedium.getAnimationForAll(
                    spider.gameInstance,
                    60
                );
                break;

            case spiderType.larger:
                spider.scale = new Vector(0.35, 0.35);

                spider.pos = new Vector(500, 500);

                animationWalking = SpriteSheetResources.spiderSheetWalkingLarger.getAnimationForAll(
                    spider.gameInstance,
                    110
                );
                break;
        }
        spider.addDrawing("spiderWalkin", animationWalking);
    }
}
