import { Point } from "engine/modules/draw/point";

export const generateRandomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRandomCoordinates = (coordinates: Point) =>
    new Point(
        boundedCell(
            generateRandomInteger(coordinates.x - 2, coordinates.x + 2)
        ),
        boundedCell(generateRandomInteger(coordinates.y - 2, coordinates.y + 2))
    );

export const travelToNest = (currentLocation: Point, nestLocation: Point) => {
    const newLocation = currentLocation;

    currentLocation.x - nestLocation.x > 0
        ? (newLocation.x -= 1)
        : (newLocation.x += 1);
    currentLocation.y - nestLocation.y > 0
        ? (newLocation.y -= 1)
        : (newLocation.y += 1);

    return newLocation;
};

const boundedCell = (index: number) => (index <= 0 ? 0 : index);
