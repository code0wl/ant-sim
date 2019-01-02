import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { Game } from "game/game";
import { AntFactory } from "actors/ant/ant.factory";
import { antType } from "actors/ant/model";
import { Engine, IDrawable } from "excalibur";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(public type: antType) {
        super();
    }
    
    public onInitialize(engine: Engine) {
        const ant = new AntFactory(this, engine);
        this.addDrawing("antWalking", ant as IDrawable);
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
