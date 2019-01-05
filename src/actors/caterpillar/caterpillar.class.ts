import { Animal } from "common/animal.class";
import { Point } from "common/model";

export class Caterpillar extends Animal {
    readonly currentLocation: Point;
    public isAlive = true;
    public isMoving = false;

    constructor() {
        super();
    }

    public move() {}

    public eat() {}

    public attack() {}

    public getLocation() {
        return this.currentLocation;
    }
}
