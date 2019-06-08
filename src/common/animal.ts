import { currentState, IActorType, Direction, IActor } from "common/model";
import { Actor } from "engine/modules/actor/actor";
import { actorStore } from "engine/modules/actor/store";

export class Animal extends Actor {
    public currentState: currentState = currentState.idle;
    public actor: IActor;

    constructor(type: IActorType) {
        super(type);

        this.actor = Array.from(actorStore).find(
            ({ actorID }) => actorID === this.actorID
        );
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
