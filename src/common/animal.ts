import {
    IAnimal,
    Point,
    IAnimationType,
    IAnimalType,
    currentState,
} from "common/model";
import { Actor } from "engine/modules/actor/actor";

export class Animal extends Actor implements IAnimal {
    public height: number;
    public width: number;
    public currentState: currentState = currentState.idle;

    constructor(
        type: IAnimalType,
        imageUrls: IAnimationType,
        public coordinates: Point
    ) {
        super(type, imageUrls);
    }

    public move() {
        this.currentState = currentState.walk;
    }

    public dead() {
        this.currentState = currentState.dead;
    }

    public idle() {
        this.currentState = currentState.idle;
    }

    public attack() {
        this.currentState = currentState.attack;
    }

    public getLocation() {
        return this.coordinates;
    }
}
