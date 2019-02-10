import { Sprite } from "common/model";

export function spriteSheetLocation(imageUrl: string) {
    const image = new Image();
    image.src = imageUrl;
    return image;
}

export function createSpriteObject({ context, width, height, image }: Sprite) {
    return {
        context,
        width,
        height,
        image,
    };
}
