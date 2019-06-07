import { Animal } from "common/animal";
import { IAnimationType } from "common/model";
import { antType } from "./model";
import { nestCoordinates } from "../nest/model";
import { Point } from "engine/modules/draw/point";

export class Ant extends Animal {
    public width = 80;
    public height = 27;
    public coordinates = new Point(
        nestCoordinates[this.type ? "red" : "black"].x,
        nestCoordinates[this.type ? "red" : "black"].y
    );

    constructor(type: antType, images: IAnimationType) {
        super(type, images);
        setInterval(() => this.move(), 5000);
        setInterval(() => this.idle(), 10000);
    }
}
