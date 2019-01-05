import { Animal } from "common/animal.class";
import { Point } from "common/model";
import { IAnt } from "actors/ant/model";
import { spiderType } from "actors/spider/model";
import { SpiderFactory } from "actors/spider/spider.factory";
import { Engine } from "excalibur";
import { animationLoader } from "common/util/animation-loader";

export class Spider extends Animal {
    public readonly currentLocation: Point;

    public isAlive = true;
    public isMoving = false;

    public attackers: IAnt[];

    constructor(public type: spiderType) {
        super();
    }

    public onInitialize(engine: Engine) {
        const spiderAnimation = new SpiderFactory(
            this,
            { y: 50, x: 50 },
            engine
        ).getAnimation();

        animationLoader(spiderAnimation, this);
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

    public die() {
        this.isMoving = false;
        this.setDrawing("dead");
    }

    public attack() {}

    public getLocation() {
        return this.currentLocation;
    }
}
