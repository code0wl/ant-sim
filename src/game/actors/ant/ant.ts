import { Animal } from "common/animal";
import { Sprite } from "common/model";
import { antType } from "./model";
import { Point } from "engine/modules/draw/point";
import { addGraphic } from "common/util/animation-loader";
import { generateRandomInteger, boundedCell } from "common/util/movement.utils";
import { Nest } from "../nest/nest";

export class Ant extends Animal {
    public readonly width = 80;
    public readonly height = 27;
    public readonly graphics: Sprite[];
    public speed = 15;
    public releaseFoodPheromone = false;
    public releaseIntruderPhermone = false;

    constructor(type: antType, private nest: Nest) {
        super(type);
        this.graphics = addGraphic(this.assignAnimation(type));
        this.coordinates = this.nest.coordinates;
    }

    public gather() {
        this.hasFood = true;
        this.releaseFoodPheromone = true;
        this.speed = this.speed / 2;
    }

    public updateActor() {
        if (this.isMoving && !this.hasFood) {
            this.coordinates = this.generateRandomCoordinates(
                new Point(this.coordinates.x, this.coordinates.y),
                this.speed
            );
        }

        if (this.hasFood) {
            this.coordinates = this.travelToNest(
                this.coordinates,
                this.nest.coordinates
            );
        }
    }

    private generateRandomCoordinates(coordinates: Point, speed: number) {
        return new Point(
            boundedCell(
                generateRandomInteger(
                    coordinates.x - speed,
                    coordinates.x + speed
                ),
                coordinates
            ),
            boundedCell(
                generateRandomInteger(
                    coordinates.y - speed,
                    coordinates.y + speed
                ),
                coordinates
            )
        );
    }

    private travelToNest(currentLocation: Point, nestLocation: Point) {
        const newLocation = currentLocation;

        currentLocation.x - nestLocation.x > 0
            ? (newLocation.x -= this.speed)
            : (newLocation.x += this.speed);
        currentLocation.y - nestLocation.y > 0
            ? (newLocation.y -= this.speed)
            : (newLocation.y += this.speed);

        return newLocation;
    }

    public alert() {
        this.releaseIntruderPhermone = true;
    }

    public deliverFood() {
        this.hasFood = false;
        this.nest.foodStores++;
    }

    private assignAnimation(type: antType) {
        const kind = !type ? 1 : 2;
        return {
            idle: `ants/spritesheets/ant${kind}/_ant_idle-small.png`,
            walk: `ants/spritesheets/ant${kind}/_ant_walk-small.png`,
            dead: `ants/spritesheets/ant${kind}/_ant_dead-small.png`,
        };
    }
}
