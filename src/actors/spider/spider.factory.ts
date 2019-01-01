import { spiderType } from "actors/spider/model";
import { Vector, SpriteSheet } from "excalibur";
import { Resources } from "common/resources";
import { Spider } from "actors/spider/spider.class";

export class SpiderFactory {

    constructor(spider: Spider) {
        let spiderSheetWalking;
        let animationWalking;

        switch (spider.type) {
            case spiderType.extra:
                spider.scale = new Vector(0.45, 0.45);

                spider.pos = new Vector(150, 150);

                spiderSheetWalking = new SpriteSheet(
                    Resources.spiderExtraWalk,
                    5,
                    2,
                    920,
                    800
                );

                animationWalking = spiderSheetWalking.getAnimationForAll(
                    spider.gameInstance,
                    150
                );

                break;

            case spiderType.small:
                spider.scale = new Vector(0.15, 0.15);

                spider.pos = new Vector(500, 150);

                spiderSheetWalking = new SpriteSheet(
                    Resources.spiderSmallWalk,
                    5,
                    2,
                    920,
                    800
                );

                animationWalking = spiderSheetWalking.getAnimationForAll(
                    spider.gameInstance,
                    30
                );
                break;

            case spiderType.medium:
                spider.scale = new Vector(0.25, 0.25);

                spider.pos = new Vector(150, 500);

                spiderSheetWalking = new SpriteSheet(
                    Resources.spiderMediumWalk,
                    5,
                    2,
                    920,
                    800
                );

                animationWalking = spiderSheetWalking.getAnimationForAll(
                    spider.gameInstance,
                    60
                );
                break;

            case spiderType.larger:
                spider.scale = new Vector(0.35, 0.35);

                spider.pos = new Vector(500, 500);

                spiderSheetWalking = new SpriteSheet(
                    Resources.spiderLargerWalk,
                    5,
                    2,
                    880,
                    740
                );

                animationWalking = spiderSheetWalking.getAnimationForAll(
                    spider.gameInstance,
                    110
                );
                break;
        }
        spider.addDrawing("spiderWalkin", animationWalking);
    }
}
