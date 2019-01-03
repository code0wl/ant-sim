import { Animal } from "common/animal.class";
import { Coordinates, IAnimationType } from "common/model";
import { IAnt } from "actors/ant/model";
import { spiderType } from "actors/spider/model";
import { SpiderFactory } from "actors/spider/spider.factory";
import { Engine, IDrawable, CollisionResolutionStrategy } from "excalibur";

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

        // make into util
        spiderAnimation.map(animation =>
            Object.entries(animation).map(animationName => {
                const [name, animation] = animationName;
                this.addDrawing(name, animation);
            })
        );

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
