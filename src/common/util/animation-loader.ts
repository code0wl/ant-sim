import { Sprite } from "common/model";

export function spriteSheetLocation(action: string) {
    const image = new Image();
    image.src = action;
    return image;
}

export function createSpriteObject({ image }: Sprite) {
    return {
        image,
    };
}
