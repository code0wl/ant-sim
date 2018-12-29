import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";

export class Caterpillar extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor() {
        super();
        console.log("ant");
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
