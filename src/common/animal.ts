import { currentState, IActorType } from "common/model";
import { Actor } from "engine/modules/actor/actor";
import { generateRandomCoordinates } from "./util/math.utils";
import { Point } from "engine/modules/draw/point";

export class Animal extends Actor {
    public currentState: currentState = currentState.idle;
    public hasFood = false;

    constructor(type: IActorType) {
        super(type);
        this.move();
    }

    public hunt() {
        if (this.hasFood) {
            this.gather();
        } else {
            this.coordinates = generateRandomCoordinates(
                new Point(this.coordinates.x, this.coordinates.y)
            );
        }
    }

    public die() {
        this.isAlive = false;
        this.currentState = currentState.dead
    }

    public fight() {}

    public gather() {
        console.log(this, "is gathering food");
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
