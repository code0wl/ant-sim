import { Point } from "engine/modules/draw/point";
import { currentResolution } from "./center";

export const generateRandomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRandomCoordinates = (coordinates: Point) =>
    new Point(
        boundedCell(
            generateRandomInteger(coordinates.x - 1, coordinates.x + 1)
        ),
        boundedCell(generateRandomInteger(coordinates.y - 1, coordinates.y + 1))
    );

const boundedCell = (index: number) => {
    let boundedIndex = index;

    if (index < 0) {
        boundedIndex = 0;
    }

    if (index > currentResolution.x) {
        boundedIndex = currentResolution.x - 1;
    }

    return boundedIndex;
};
