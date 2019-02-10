import { Animal } from "common/animal";
import { Point } from "common/model";
import { AntFactory } from "actors/ant/ant.factory";
import { antType } from "actors/ant/model";

export class Ant extends Animal {
    readonly currentLocation: Point;
    public isAlive = true;
    public isMoving = false;

    constructor(public type: antType) {
        super();
    }

    public move() {
        this.isMoving = true;
    }

    private attachGraphics() {
        // new AntFactory();
    }

    public idle() {
        this.isMoving = false;
    }

    public eat() {}

    public attack() {}

    public getLocation() {
        return this.currentLocation;
    }
}
