import { Point } from "engine/modules/draw/point";
import { currentResolution } from "./center";

export const generateRandomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRandomCoordinates = (coordinates: Point) =>
    new Point(
        boundedCell(
            generateRandomInteger(coordinates.x - 2, coordinates.x + 2)
        ),
        boundedCell(generateRandomInteger(coordinates.y - 2, coordinates.y + 2))
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
