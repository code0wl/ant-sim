import { Point } from "engine/modules/draw/point";
export const currentResolution = new Point(
    window.innerWidth,
    window.innerHeight
);

const setCenter = (): Point => ({
    x: currentResolution.x / 2,
    y: currentResolution.y / 2,
});

export const { x, y } = setCenter();
