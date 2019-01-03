import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { IAnt } from "actors/ant/model";
import { spiderType } from "actors/spider/model";
import { SpiderFactory } from "actors/spider/spider.factory";
import { Engine } from "excalibur";
import { animationLoader } from "common/util/animation-loader";

export class Spider extends Animal {
    public readonly currentLocation: Coordinates;

    public isAlive = true;
    public isMoving = false;

    public attackers: IAnt[];

    constructor(public type: spiderType) {
        super();
    }

    public onInitialize(engine: Engine) {
        const spiderAnimation = new SpiderFactory(
            this,
            { latitude: 50, longitude: 50 },
            engine
        ).getAnimation();

        animationLoader(spiderAnimation, this);

        this.idle();
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

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
