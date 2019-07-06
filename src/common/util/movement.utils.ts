import { Point } from "engine/modules/draw/point";
import { currentResolution } from "./center";

const padding = 15;
const speed = 3;

export const generateRandomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const generateRandomCoordinates = (coordinates: Point) =>
    new Point(
        boundedCell(
            generateRandomInteger(coordinates.x - speed, coordinates.x + speed),
            coordinates
        ),
        boundedCell(
            generateRandomInteger(coordinates.y - speed, coordinates.y + speed),
            coordinates
        )
    );

// TODO fix this
export const boundedCell = (coordinate: number, coordinates?: Point) => {
    if (coordinate < 0) {
        return coordinate + padding;
    }

    if (coordinates) {
        if (
            coordinates.x + padding >= currentResolution.x ||
            coordinates.y + padding >= currentResolution.y
        ) {
            return coordinate - padding;
        }
    }

    return coordinate;
};
