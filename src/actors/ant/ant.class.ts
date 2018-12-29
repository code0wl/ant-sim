import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";

declare const cc: any;

export class Ant extends Animal {
    readonly graphic: any;
    readonly currentLocation: Coordinates;

    public isAlive = true;
    public isMoving = false;

    constructor() {
        super();
        this.graphic = new cc.SpriteFrame(
            "assets/HelloWorld.png",
            cc.rect(0, 0, 90, 128)
        );
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
