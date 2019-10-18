import { Point } from "engine/modules/draw/point";
import { currentResolution } from "./center";

const padding = 15;

export const generateRandomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const toRadians = (degrees: number) => degrees * (Math.PI / 180);

export const generateRandomCoordinates = (coordinates: Point, speed: number) =>
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

export const travelToPoint = (
    currentLocation: Point,
    destination: Point,
    speed: number
) => {
    const newLocation = currentLocation;

    if (!destination) return currentLocation;

    currentLocation.x - destination.x > 0
        ? (newLocation.x -= speed)
        : (newLocation.x += speed);
    currentLocation.y - destination.y > 0
        ? (newLocation.y -= speed)
        : (newLocation.y += speed);

    return newLocation;
};

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
