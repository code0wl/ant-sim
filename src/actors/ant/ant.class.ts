import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { Resources } from "common/resources";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor() {
        super();
        this.addDrawing(Resources.blackAntIdle);
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
