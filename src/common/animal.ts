import { currentState, IActorType } from "common/model";
import { Actor } from "engine/modules/actor/actor";
import { generateRandomCoordinates } from "./util/math.utils";
import { Point } from "engine/modules/draw/point";

export class Animal extends Actor {
    public currentState: currentState = currentState.idle;
    public hasFood = false;
    public isMoving = false;

    constructor(type: IActorType) {
        super(type);
        this.move();
    }

    public die() {
        this.isActive = false;
        this.isMoving = false;
        this.currentState = currentState.dead;
    }

    public move() {
        this.currentState = currentState.walk;
        this.isMoving = true;
    }

    public dead() {
        this.currentState = currentState.dead;
        this.isMoving = false;
    }

    public idle() {
        this.currentState = currentState.idle;
        this.isMoving = false;
    }

    public attack() {
        this.currentState = currentState.attack;
    }
}
