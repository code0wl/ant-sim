import { Coordinates } from "common/model";

export const currentResolution = {
    x: window.innerWidth,
    y: window.innerHeight,
};

const setCenter = (): Coordinates => ({
    longitude: currentResolution.x / 2,
    latitude: currentResolution.y / 2,
});

export const { latitude, longitude } = setCenter();
