import { Sprite } from "common/model";

export function spriteSheet(imageUrl: string) {
    const image = new Image();
    image.src = `public/${imageUrl}`;
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
