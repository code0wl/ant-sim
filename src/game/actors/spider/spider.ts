import { Engine } from "engine/engine";
import { IAnt } from "game/actors/ant/model";
import { Animal } from "common/animal";
import { spiderType } from "game/actors/spider/model";

export class Spider extends Animal {
    public attackers: IAnt[];

    constructor(public type: spiderType, imageUrl: string) {
        super(imageUrl);
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
