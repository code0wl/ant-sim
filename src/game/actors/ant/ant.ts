import { Animal } from "common/animal";
import { currentState, IAnimationType, Point } from "common/model";
import { antType } from "./model";

export class Ant extends Animal {
    public isAlive = true;
    public isMoving = false;
    public isSearching = false;
    public width = 80;
    public height = 27;

    constructor(
        public type: antType,
        images: IAnimationType,
        state: currentState,
        public coordinates: Point
    ) {
        super(type, images, state, coordinates);
    }

    public move() {
        this.isMoving = true;
    }

    public idle() {
        this.isMoving = false;
    }

    public eat() {}

    public carry() {}

    public attack() {}

    public getLocation() {
        return this.coordinates;
    }
}
