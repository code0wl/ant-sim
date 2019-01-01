import { spiderType } from "actors/spider/model";
import { Actor, Vector, SpriteSheet } from "excalibur";
import { Resources } from "common/resources";
import { Game } from "game/game";

export class SpiderFactory {
    constructor(actor: Actor, game: Game, type: spiderType) {
        switch (type) {
            case spiderType.extra:
                actor.scale = new Vector(0.4, 0.4);

                actor.pos = new Vector(150, 150);

                const spiderSheetWalking = new SpriteSheet(
                    Resources.spiderExtraWalk,
                    5,
                    2,
                    920,
                    800
                );

                const animationWalking = spiderSheetWalking.getAnimationForAll(
                    game,
                    150
                );

                actor.addDrawing("bigSpiderWalk", animationWalking);
                break;

            case spiderType.small:
                actor.scale = new Vector(0.15, 0.15);

                actor.pos = new Vector(500, 150);

                const spiderSheetWalking = new SpriteSheet(
                    Resources.spiderSmallWalk,
                    5,
                    2,
                    920,
                    800
                );

                const animationWalking = spiderSheetWalking.getAnimationForAll(
                    game,
                    30
                );

                actor.addDrawing("smallSpiderWalk", animationWalking);
                break;

            case spiderType.medium:
                actor.scale = new Vector(0.25, 0.25);

                actor.pos = new Vector(150, 500);

                const spiderSheetWalking = new SpriteSheet(
                    Resources.spiderMediumWalk,
                    5,
                    2,
                    920,
                    800
                );

                const animationWalking = spiderSheetWalking.getAnimationForAll(
                    game,
                    60
                );

                actor.addDrawing("mediumSpiderWalk", animationWalking);
                break;

            case spiderType.larger:
                actor.scale = new Vector(0.35, 0.35);

                actor.pos = new Vector(500, 500);

                const spiderSheetWalking = new SpriteSheet(
                    Resources.spiderLargerWalk,
                    5,
                    2,
                    880,
                    740
                );

                const animationWalking = spiderSheetWalking.getAnimationForAll(
                    game,
                    120
                );

                actor.addDrawing("mediumSpiderWalk", animationWalking);
                break;
        }
    }
}
