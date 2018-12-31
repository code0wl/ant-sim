import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { Resources } from "common/resources";
import { SpriteSheet, Vector, Engine } from "excalibur";
import { Game } from "game/game";
import { longitude, latitude } from "common/util/center";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(private engine: Game) {
        super();

        this.pos = new Vector(longitude, latitude);

        this.scale = new Vector(0.03, 0.03);

        const antSheetWalking = new SpriteSheet(
            Resources.blackAntWalking,
            5,
            3,
            540,
            765
        );

        const animationWalking = antSheetWalking.getAnimationForAll(
            this.engine,
            10
        );

        this.addDrawing("walk", animationWalking);
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
