import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { AntFactory } from "actors/ant/ant.factory";
import { antType } from "actors/ant/model";
import { Engine } from "excalibur";
import { animationLoader } from "common/util/animation-loader";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(public type: antType) {
        super();
    }

    public onInitialize(engine: Engine) {
        const antAnimation = new AntFactory(
            this,
            { latitude: 50, longitude: 50 },
            engine
        ).getAnimation();

        animationLoader(antAnimation, this);

        setInterval(() => this.move(), 5000);
        setInterval(() => this.idle(), 10000);
    }

    public move() {
        this.isMoving = true;
        this.setDrawing("walking");
    }

    public idle() {
        this.isMoving = false;
        this.setDrawing("idle");
    }

    public eat() {}

    public attack() {}

    public getLocation() {
        return this.currentLocation;
    }
}
