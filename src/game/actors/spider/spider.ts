import { Engine } from "engine/engine";
import { IAnt } from "game/actors/ant/model";
import { Animal } from "common/animal";
import { spiderType } from "game/actors/spider/model";
import { currentState, IAnimationType, Point } from "common/model";

export class Spider extends Animal {
    public attackers: IAnt[];
    public isAlive = true;
    public isMoving = false;
    public isSearching = false;
    public width = !this.type ? 300 : 900;
    public height = !this.type ? 50 : 150;

    constructor(
        public type: spiderType,
        images: IAnimationType,
        state: currentState,
        public coordinates: Point
    ) {
        super(type, images, state, coordinates);
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
        return this.coordinates;
    }
}
