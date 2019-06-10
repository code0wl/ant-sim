import { Animal } from "common/animal";
import { Sprite } from "common/model";
import { antType } from "./model";
import { nestCoordinates } from "../nest/model";
import { Point } from "engine/modules/draw/point";
import { addGraphic } from "common/util/animation-loader";
import { generateRandomCoordinates } from "common/util/math.utils";

export class Ant extends Animal {
    public width = 80;
    public height = 27;
    public graphics: Sprite[];
    public coordinates = new Point(
        nestCoordinates[this.type ? "red" : "black"].x,
        nestCoordinates[this.type ? "red" : "black"].y
    );

    constructor(type: antType) {
        super(type);
        this.graphics = addGraphic(this.assignAnimation(type));
    }

    public hunt() {
        this.coordinates = generateRandomCoordinates(
            new Point(this.coordinates.x, this.coordinates.y)
        );
    }

    private assignAnimation(type: antType) {
        const kind = type ? 1 : 2;
        return {
            idle: `ants/spritesheets/ant${kind}/_ant_idle-small.png`,
            walk: `ants/spritesheets/ant${kind}/_ant_walk-small.png`,
            dead: `ants/spritesheets/ant${kind}/_ant_dead-small.png`,
        };
    }

    carry() {}
}
