import { Animal } from "common/animal.class";
import { Point } from "common/model";
import { IAnt } from "actors/ant/model";
import { spiderType } from "actors/spider/model";

export class Spider extends Animal {
    public attackers: IAnt[];

    constructor(public type: spiderType) {
        super();
    }

    public onInitialize(engine: Engine) {
        setInterval(() => this.move(), 5000);
        setInterval(() => this.idle(), 10000);
    }

    public move() {
        this.isMoving = true;
    }

    public idle() {
        this.isMoving = false;
    }

    public eat() {}

    public die() {
        this.isMoving = false;
    }

    public attack() {}

    public getLocation() {
        return this.currentLocation;
    }
}
