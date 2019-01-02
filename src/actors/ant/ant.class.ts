import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { Game } from "game/game";
import { AntFactory } from "actors/ant/ant.factory";
import { antType } from "actors/ant/model";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(public gameInstance: Game, public type: antType) {
        super();
    }
    public onInitialize() {
        const ant = new AntFactory(this);
        this.addDrawing("antWalking", ant);
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
