import { Sprite } from "common/model";

export function spriteSheetLocation(imageUrl: string) {
    const image = new Image();
    image.src = imageUrl;
    return image;
}

export function createSpriteObject({ width, height, image }: Sprite) {
    return {
        width,
        height,
        image,
    };
}
