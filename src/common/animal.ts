import {
    IAnimationType,
    currentState,
    IActorType,
} from "common/model";
import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";

export class Animal extends Actor {
    public height: number;
    public width: number;
    public currentState: currentState = currentState.idle;

    constructor(
        type: IActorType,
        imageUrls: IAnimationType,
        coordinates: Point
    ) {
        super(type, imageUrls, coordinates);
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
}
