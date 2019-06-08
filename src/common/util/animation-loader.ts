import { IAnimationType } from "common/model";

export function spriteSheetLocation(src: string) {
    const image = new Image();
    image.src = src;
    return image;
}

export function addGraphic(animationType: IAnimationType) {
    return Object.values(animationType)
        .reduce((prev, next) => {
            prev.push(spriteSheetLocation(next));
            return prev;
        }, [])
        .map((image: HTMLImageElement) => ({ image }));
}
