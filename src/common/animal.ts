import { currentState, IActorType } from "common/model";
import { Actor } from "engine/modules/actor/actor";

interface IUpdate {
    updateActor(): void;
}

export class Animal extends Actor implements IUpdate {
    public currentState: currentState = currentState.idle;
    public hasFood = false;
    public isMoving = false;
    public speed: number;

    constructor(public type: IActorType) {
        super(type);
        this.move();
    }

    public die() {
        this.currentState = currentState.dead;
        this.remove();
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

    // @ override
    public updateActor() {}
}
