import { Animal } from "common/animal";
import { currentState, IAnimationType } from "common/model";
import { antType } from "./model";

export class Ant extends Animal {
    public isAlive = true;
    public isMoving = false;
    public isSearching = false;
    public width = 20;
    public height = 40;

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

    public carry() {}

    public attack() {}

    public getLocation() {
        return this.currentLocation;
    }
}
