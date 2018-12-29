import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";

export class AntLion extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor() {
        super();
        console.log("ant-lion");
    }

    public move() {}

    public eat() {}

    public attack() {}

    public getLocation() {
        return this.currentLocation;
    }
}
