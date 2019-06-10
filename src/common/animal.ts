import { currentState, IActorType, IActor } from "common/model";
import { Actor } from "engine/modules/actor/actor";

export class Animal extends Actor {
    public currentState: currentState = currentState.idle;

    constructor(type: IActorType) {
        super(type);

        this.move();
    }

    public hunt() {
        this.hunt();
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

    public hasFood() {}
}
