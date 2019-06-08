import { currentState, IActorType, IActor } from "common/model";
import { Actor } from "engine/modules/actor/actor";
import { actorStore } from "engine/modules/actor/store";
import { generateRandomCoordinates } from "./util/math.utils";
import { Point } from "engine/modules/draw/point";

export class Animal extends Actor {
    public currentState: currentState = currentState.idle;
    public actor: IActor;

    constructor(type: IActorType) {
        super(type);

        this.actor = Array.from(actorStore).find(
            ({ actorID }) => actorID === this.actorID
        );

        this.move();
    }

    public hunt() {
        this.coordinates = generateRandomCoordinates(
            new Point(this.coordinates.x, this.coordinates.y)
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

    public hasFood() {}
}
