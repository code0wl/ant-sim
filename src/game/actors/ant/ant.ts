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
        this.nest.foodStores++;
    }

    public updateActor() {
        if (this.isMoving && !this.hasFood) {
            this.coordinates = generateRandomCoordinates(
                new Point(this.coordinates.x, this.coordinates.y)
            );
        }

        if (this.hasFood) {
            const currentCoordinates = this.coordinates;
            const { x, y } = this.coordinates;

            this.coordinates = travelToNest(
                currentCoordinates,
                new Point(x, y)
            );

            this.hasFood = this.coordinates.x === x && this.coordinates.y === y;
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
