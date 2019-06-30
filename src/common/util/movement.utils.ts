import { Point } from "engine/modules/draw/point";
import { currentResolution } from "./center";

export const generateRandomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRandomCoordinates = (coordinates: Point) =>
    new Point(
        boundedCell(
            coordinates,
            generateRandomInteger(coordinates.x - 2, coordinates.x + 2)
        ),
        boundedCell(
            coordinates,
            generateRandomInteger(coordinates.y - 2, coordinates.y + 2)
        )
    );

export const travelToNest = (currentLocation: Point, nestLocation: Point) => {
    const newLocation = currentLocation;

    currentLocation.x - nestLocation.x >= 0
        ? (newLocation.x -= 1)
        : (newLocation.x += 1);
    currentLocation.y - nestLocation.y >= 0
        ? (newLocation.y -= 1)
        : (newLocation.y += 1);

    return newLocation;
};

// TODO fix this
const boundedCell = (coordinates: Point, coordinate: number) => {
    if (coordinate < 0) {
        return coordinate + 15;
    }

    if (
        coordinates.x >= currentResolution.x ||
        coordinates.y >= currentResolution.y
    ) {
        coordinate - 15;
    }

    return coordinate;
};
