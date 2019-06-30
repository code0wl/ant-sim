import { Animal } from "common/animal";
import { Sprite } from "common/model";
import { antType } from "./model";
import { Point } from "engine/modules/draw/point";
import { addGraphic } from "common/util/animation-loader";
import {
    generateRandomCoordinates,
    travelToNest,
} from "common/util/movement.utils";
import { Nest } from "../nest/nest";

export class Ant extends Animal {
    public readonly width = 80;
    public readonly height = 27;
    public readonly graphics: Sprite[];

    constructor(type: antType, private nest: Nest) {
        super(type);
        this.graphics = addGraphic(this.assignAnimation(type));
        this.coordinates = this.nest.coordinates;
    }

    public gather() {
        this.hasFood = true;
    }

    public updateActor() {
        if (this.isMoving && !this.hasFood) {
            this.coordinates = generateRandomCoordinates(
                new Point(this.coordinates.x, this.coordinates.y),
                this.type
            );
        }

        if (this.hasFood) {
            const currentCoordinates = this.coordinates;

            this.coordinates = travelToNest(
                currentCoordinates,
                this.nest.coordinates
            );
            this.deliverFood();
        }
    }

    private deliverFood() {
        if (
            this.coordinates.x === this.nest.coordinates.x &&
            this.coordinates.y === this.nest.coordinates.y
        ) {
            this.hasFood = false;
            this.nest.foodStores++;
        }
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
