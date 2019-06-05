import { Animal } from "common/animal";
import { IAnimationType } from "common/model";
import { antType } from "./model";
import { Point } from "engine/modules/draw/point";

export class Ant extends Animal {
    public width = 80;
    public height = 27;

    constructor(
        type: antType,
        images: IAnimationType,
        coordinates: Point
    ) {
        super(type, images, coordinates);
        setInterval(() => this.move(), 5000);
        setInterval(() => this.idle(), 10000);
    }
}
