import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { Resources } from "common/resources";
import { SpriteSheet, Vector } from "excalibur";
import { Game } from "game/game";
import { longitude, latitude } from "common/util/center";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(private game: Game) {
        super();

        this.pos = new Vector(longitude, latitude);

        this.scale = new Vector(.03, .03);

        const antSheetIdle = new SpriteSheet(
            Resources.blackAntIdle,
            5,
            4,
            540,
            765
        );

        const antSheetWalking = new SpriteSheet(
            Resources.blackAntWalking,
            5,
            3,
            540,
            765
        );

        const animationIdle = antSheetIdle.getAnimationForAll(this.game, 10);
        
        const animationWalking = antSheetWalking.getAnimationForAll(
            this.game,
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
