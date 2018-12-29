import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";

declare const cc: any;

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(private height: number, private width: number) {
        super();
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
