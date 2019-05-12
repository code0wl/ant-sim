import { Sprite, IAnimationType } from "common/model";

export function spriteSheetLocation(action: IAnimationType) {
    const type = Object.values(action)[0];
    const image = new Image();
    image.src = type;
    return image;
}

export function createSpriteObject({ image }: Sprite) {
    return {
        image,
    };
}
