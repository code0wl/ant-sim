import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { Game } from "game/game";
import { IAnt } from "actors/ant/model";
import { spiderType } from "actors/spider/model";
import { SpiderFactory } from "actors/spider/spider.factory";

export class Spider extends Animal {
    public readonly currentLocation: Coordinates;

    public isAlive = true;
    public isMoving = false;
    public invaders: IAnt[];
    public spider: SpiderFactory;

    constructor(public gameInstance: Game, public type: spiderType) {
        super();
    }

    public onInitialize() {
        new SpiderFactory(this);
    }

    public move() {
        this.isMoving = true;
    }

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
