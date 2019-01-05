import { Point } from "common/model";

export const currentResolution = {
    x: window.innerWidth,
    y: window.innerHeight,
};

const setCenter = (): Point => ({
    x: currentResolution.x / 2,
    y: currentResolution.y / 2,
});

export const { x, y } = setCenter();
