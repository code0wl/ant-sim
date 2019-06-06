import { IAnimationType, currentState, IActorType } from "common/model";
import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { actorStore } from "engine/modules/actor/store";

export class Animal extends Actor {
    public height: number;
    public width: number;
    public currentState: currentState = currentState.idle;
    public actor: Actor;

    constructor(
        type: IActorType,
        coordinates: Point,
        imageUrls?: IAnimationType
    ) {
        super(type, coordinates, imageUrls);

        this.actor = Array.from(actorStore).find(
            x => x.actorID === this.actorID
        );
    }

    public move() {
        this.currentState = currentState.walk;
        this.actor.coordinates.x += 5;
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
