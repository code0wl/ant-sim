import { Texture, SpriteSheet } from "excalibur";

const spiderSmall = {
    spiderSmallWalk: new Texture(
        "Spiders_Characters_Spritesheets/spider4/spritesheets/sheet_spider_walk.png"
    ),
    spiderSmallIdle: new Texture(
        "Spiders_Characters_Spritesheets/spider4/spritesheets/sheet_spider_idle.png"
    ),
    spiderSmallHit: new Texture(
        "Spiders_Characters_Spritesheets/spider4/spritesheets/sheet_spider_hit.png"
    ),
    spiderSmallDie: new Texture(
        "Spiders_Characters_Spritesheets/spider4/spritesheets/sheet_spider_die.png"
    ),
    spiderSmallAttack: new Texture(
        "Spiders_Characters_Spritesheets/spider4/spritesheets/sheet_spider_attack.png"
    ),
};

const blackAnt = {
    blackAntIdle: new Texture("spritesheets/__black_ant_idle.png"),
    blackAntWalking: new Texture("spritesheets/__black_ant_walk.png"),
};

const redAnt = {
    redAntIdle: new Texture("spritesheets/__red_ant_idle.png"),
    redAntWalking: new Texture("spritesheets/__red_ant_walk.png"),
};

export const Resources = {
    ...blackAnt,
    ...redAnt,
    ...spiderSmall,

    spiderMediumWalk: new Texture(
        "Spiders_Characters_Spritesheets/spider3/spritesheets/sheet_spider_walk.png"
    ),
    spiderLargerWalk: new Texture(
        "Spiders_Characters_Spritesheets/spider2/spritesheets/sheet_spider_walk.png"
    ),
    spiderExtraWalk: new Texture(
        "Spiders_Characters_Spritesheets/spider1/spritesheets/sheet_spider_walk.png"
    ),
};

export const SpriteSheetResourcesMoving = {
    spiderSheetWalkingExtra: new SpriteSheet(
        Resources.spiderExtraWalk,
        5,
        2,
        920,
        800
    ),
    spiderSheetWalkingSmall: new SpriteSheet(
        Resources.spiderSmallWalk,
        5,
        2,
        920,
        800
    ),
    spiderSheetWalkingMedium: new SpriteSheet(
        Resources.spiderMediumWalk,
        5,
        2,
        920,
        800
    ),
    spiderSheetWalkingLarger: new SpriteSheet(
        Resources.spiderLargerWalk,
        5,
        2,
        880,
        740
    ),
    antSheetWalkingBlack: new SpriteSheet(
        Resources.blackAntWalking,
        5,
        3,
        540,
        765
    ),
    antSheetWalkingRed: new SpriteSheet(
        Resources.redAntWalking,
        5,
        3,
        540,
        765
    ),
};

export const SpriteSheetResourcesIdle = {
    antSheetIdleBlack: new SpriteSheet(Resources.blackAntIdle, 5, 3, 540, 765),
    antSheetIdleRed: new SpriteSheet(Resources.redAntIdle, 5, 3, 540, 765),
    spiderSheetIdleSmall: new SpriteSheet(Resources.spiderSmallIdle, 5, 3, 540, 765),
};
