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

const spiderExtra = {
    spiderExtraWalk: new Texture(
        "Spiders_Characters_Spritesheets/spider1/spritesheets/sheet_spider_walk.png"
    ),
    spiderExtraIdle: new Texture(
        "Spiders_Characters_Spritesheets/spider1/spritesheets/sheet_spider_idle.png"
    ),
    spiderExtraHit: new Texture(
        "Spiders_Characters_Spritesheets/spider1/spritesheets/sheet_spider_hit.png"
    ),
    spiderExtraDie: new Texture(
        "Spiders_Characters_Spritesheets/spider1/spritesheets/sheet_spider_die.png"
    ),
    spiderExtraAttack: new Texture(
        "Spiders_Characters_Spritesheets/spider4/spritesheets/sheet_spider_attack.png"
    ),
};

const spiderMedium = {
    spiderMediumWalk: new Texture(
        "Spiders_Characters_Spritesheets/spider3/spritesheets/sheet_spider_walk.png"
    ),
    spiderMediumIdle: new Texture(
        "Spiders_Characters_Spritesheets/spider3/spritesheets/sheet_spider_idle.png"
    ),
    spiderMediumHit: new Texture(
        "Spiders_Characters_Spritesheets/spider3/spritesheets/sheet_spider_hit.png"
    ),
    spiderMediumDie: new Texture(
        "Spiders_Characters_Spritesheets/spider3/spritesheets/sheet_spider_die.png"
    ),
    spiderMediumAttack: new Texture(
        "Spiders_Characters_Spritesheets/spider3/spritesheets/sheet_spider_attack.png"
    ),
};

const spiderLarge = {
    spiderLargerWalk: new Texture(
        "Spiders_Characters_Spritesheets/spider2/spritesheets/sheet_spider_walk.png"
    ),
    spiderLargerIdle: new Texture(
        "Spiders_Characters_Spritesheets/spider2/spritesheets/sheet_spider_idle.png"
    ),
    spiderLargerHit: new Texture(
        "Spiders_Characters_Spritesheets/spider2/spritesheets/sheet_spider_hit.png"
    ),
    spiderLargerDie: new Texture(
        "Spiders_Characters_Spritesheets/spider2/spritesheets/sheet_spider_die.png"
    ),
    spiderLargerAttack: new Texture(
        "Spiders_Characters_Spritesheets/spider2/spritesheets/sheet_spider_attack.png"
    ),
};

const blackAnt = {
    blackAntIdle: new Texture("spritesheets/__black_ant_idle.png"),
    blackAntWalking: new Texture("spritesheets/__black_ant_walk.png"),
    blackAntDead: new Texture("spritesheets/__black_ant_dead.png"),
};

const redAnt = {
    redAntIdle: new Texture("spritesheets/__red_ant_idle.png"),
    redAntWalking: new Texture("spritesheets/__red_ant_walk.png"),
    blackRedDead: new Texture("spritesheets/__red_ant_dead.png"),
};

export const Resources = {
    ...blackAnt,
    ...redAnt,
    ...spiderSmall,
    ...spiderMedium,
    ...spiderLarge,
    ...spiderExtra,
};

export const SpriteSheetResourcesMoving = {
    spiderSheetWalkingExtra: new SpriteSheet(
        Resources.spiderExtraWalk,
        5,
        2,
        923,
        815
    ),
    spiderSheetWalkingSmall: new SpriteSheet(
        Resources.spiderSmallWalk,
        5,
        2,
        930,
        815
    ),
    spiderSheetWalkingMedium: new SpriteSheet(
        Resources.spiderMediumWalk,
        5,
        2,
        918,
        781
    ),
    spiderSheetWalkingLarger: new SpriteSheet(
        Resources.spiderLargerWalk,
        5,
        2,
        882.5,
        756
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
    spiderSheetIdleSmall: new SpriteSheet(
        Resources.spiderSmallIdle,
        5,
        2,
        930,
        815
    ),
    spiderSheetIdleExtra: new SpriteSheet(
        Resources.spiderExtraIdle,
        5,
        2,
        923,
        815
    ),
    spiderSheetIdleMedium: new SpriteSheet(
        Resources.spiderMediumIdle,
        5,
        2,
        918,
        781
    ),
    spiderSheetIdleLarger: new SpriteSheet(
        Resources.spiderLargerIdle,
        5,
        2,
        882.5,
        756
    ),
};
