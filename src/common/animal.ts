import { currentState, IActorType } from "common/model";
import { Actor } from "engine/modules/actor/actor";

export class Animal extends Actor {
    public currentState: currentState = currentState.idle;
    public hasFood = false;
    public isMoving = false;

    constructor(public type: IActorType) {
        super(type);
        this.move();
    }

    public die() {
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

    public updateActor() {}
}
