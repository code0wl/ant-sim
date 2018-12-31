import { Coordinates } from "common/model";

const setCenter = (): Coordinates => ({
    longitude: window.innerWidth / 2,
    latitude: window.innerHeight / 2,
});

export const { latitude, longitude } = setCenter();
