import { Animal } from "common/animal";
import { Point, currentState, IAnimationType } from "common/model";
import { antType } from "./model";

export class Ant extends Animal {
    readonly currentLocation: Point;
    public isAlive = true;
    public isMoving = false;
    public isSearching = false;
    public width = 200;
    public height = 200;

    constructor(
        public type: antType,
        images: IAnimationType,
        state: currentState
    ) {
        super(type, images, state);
    }

    public move() {
        this.isMoving = true;
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
