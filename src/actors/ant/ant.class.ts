import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";

declare const cc: any;

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;
    private graphic: any;

    constructor(game: any) {
        super();
        this.graphic = new cc.SpriteFrame(
            "spritesheets/__black_ant_idle.png",
            cc.rect(0, 0, 90, 128)
        );
        console.log(game);
    }

    public move() {
        this.graphic = new cc.SpriteFrame(
            "spritesheets/__black_ant_walk.png",
            cc.rect(0, 0, 90, 128)
        );
    }

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
