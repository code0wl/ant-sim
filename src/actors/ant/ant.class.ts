import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(private app) {
        super();
    }

    public idle() {
        // this.graphic = Sprite.fromImage("spritesheets/__black_ant_idle.png");
        // this.graphic.anchor.set(0.5);
        // this.graphic.width = 30;
        // this.graphic.height = 50;
        // this.graphic.x = this.app.screen.width / 2;
        // this.graphic.y = this.app.screen.height / 2;
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
