import { Animal } from "common/animal";
import { Sprite } from "common/model";
import { antType } from "./model";
import { Point } from "engine/modules/draw/point";
import { addGraphic } from "common/util/animation-loader";
import { generateRandomCoordinates } from "common/util/movement.utils";
import { Nest } from "../nest/nest";

export class Ant extends Animal {
    public readonly width = 80;
    public readonly height = 27;
    public readonly graphics: Sprite[];
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
    }

    public updateActor() {
        if (this.isMoving && !this.hasFood) {
            this.coordinates = generateRandomCoordinates(
                new Point(this.coordinates.x, this.coordinates.y)
            );
        }

        if (this.hasFood) {
            this.coordinates = this.travelToNest(
                this.coordinates,
                this.nest.coordinates
            );
        }
    }

    private travelToNest(currentLocation: Point, nestLocation: Point) {
        const newLocation = currentLocation;

        currentLocation.x - nestLocation.x > 0
            ? (newLocation.x -= 0.3)
            : (newLocation.x += 0.3);
        currentLocation.y - nestLocation.y > 0
            ? (newLocation.y -= 0.3)
            : (newLocation.y += 0.3);

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
