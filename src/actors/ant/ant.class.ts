import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";

declare const cc: any;

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;
    private graphic: any;
    private layer: any;

    constructor(private height: number, private width: number) {
        super();

        this.graphic = new cc.Sprite.create(
            "spritesheets/__black_ant_idle.png"
        );

        this.graphic
            .setAnchorPoint(cc.p(0.5, 0.5))
            .setPosition(cc.p(this.height / 2, this.width / 2));

        this.layer = new cc.Layer.extend({
            ctor: function() {},
        });
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
