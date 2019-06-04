import { Animal } from "common/animal";
import { IAnimationType, Point } from "common/model";
import { antType } from "./model";

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
