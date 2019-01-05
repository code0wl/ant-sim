import { SpriteSheet } from "excalibur";
import spiderResource from "actors/spider/spider.resource";
import antResources from "actors/ant/ant.resource";

export const Resources = {
    ...antResources,
    ...spiderResource,
};

export const SpriteSheetResourcesMoving = {
    spiderSheetWalkingExtra: new SpriteSheet(
        Resources.spiderExtra.walk,
        5,
        2,
        200,
        176
    ),
    spiderSheetWalkingSmall: new SpriteSheet(
        Resources.spiderSmall.walk,
        5,
        2,
        200,
        176
    ),
    spiderSheetWalkingMedium: new SpriteSheet(
        Resources.spiderMedium.walk,
        5,
        2,
        200,
        176
    ),
    spiderSheetWalkingLarger: new SpriteSheet(
        Resources.spiderLarger.walk,
        5,
        2,
        200,
        176
    ),
    antSheetWalkingBlack: new SpriteSheet(
        Resources.blackAnt.walk,
        5,
        3,
        540,
        765
    ),
    antSheetWalkingRed: new SpriteSheet(Resources.redAnt.walk, 5, 3, 540, 765),
};

export const SpriteSheetResourcesIdle = {
    antSheetIdleBlack: new SpriteSheet(Resources.blackAnt.idle, 5, 3, 540, 765),
    antSheetIdleRed: new SpriteSheet(Resources.redAnt.idle, 5, 3, 540, 765),
    spiderSheetIdleSmall: new SpriteSheet(
        Resources.spiderSmall.idle,
        5,
        2,
        200,
        176
    ),
    spiderSheetIdleExtra: new SpriteSheet(
        Resources.spiderExtra.idle,
        5,
        2,
        200,
        176
    ),
    spiderSheetIdleMedium: new SpriteSheet(
        Resources.spiderMedium.idle,
        5,
        2,
        200,
        176
    ),
    spiderSheetIdleLarger: new SpriteSheet(
        Resources.spiderLarger.idle,
        5,
        2,
        200,
        176
    ),
};
