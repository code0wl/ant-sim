import { Animal } from "common/animal";
import { IAnimationType } from "common/model";
import { antType } from "./model";
import { nestCoordinates } from "../nest/model";
import { Point } from "engine/modules/draw/point";
import { addGraphic } from "common/util/animation-loader";

export class Ant extends Animal {
    public width = 80;
    public height = 27;
    public graphics: IAnimationType;
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
        if (!type) {
            return {
                walk: "ants/__black_ant_walk-small.png",
                idle: "ants/__black_ant_idle-small.png",
                dead: "ants/__black_ant_dead-small.png",
            };
        } else {
            return {
                walk: "ants/__red_ant_walk-small.png",
                idle: "ants/__red_ant_idle-small.png",
                dead: "ants/__red_ant_dead-small.png",
            };
        }
    }
}
