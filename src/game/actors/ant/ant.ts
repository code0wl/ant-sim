import { Animal } from "common/animal";
import { Sprite } from "common/model";
import { antType } from "./model";
import { nestCoordinates } from "../nest/model";
import { Point } from "engine/modules/draw/point";
import { addGraphic } from "common/util/animation-loader";

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
        setInterval(() => this.move(), 5000);
        setInterval(() => this.idle(), 10000);

        this.graphics = addGraphic(this.assignAnimation(type));
    }

    private assignAnimation(type: antType) {
        const kind = type ? 1 : 2;
        return {
            walk: `ants/spritesheets/ant${kind}/_ant_walk-small.png`,
            idle: `ants/spritesheets/ant${kind}/_ant_idle-small.png`,
            dead: `ants/spritesheets/ant${kind}/_ant_dead-small.png`,
        };
    }
    carry() {}
}
