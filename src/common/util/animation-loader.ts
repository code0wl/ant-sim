import { Sprite, AnimationType  } from "common/model";

export function spriteSheetLocation(action: AnimationType) {
    const type = Object.values(action)[0];
    const image = new Image();
    image.src = type;
    return image;
}

export function createSpriteObject({ width, height, image }: Sprite) {
    return {
        width,
        height,
        image,
    };
}
