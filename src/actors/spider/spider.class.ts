import { Animal } from "common/animal.class";
import { Coordinates } from "common/model";
import { Resources } from "common/resources";
import { SpriteSheet, Vector } from "excalibur";
import { Game } from "game/game";

export class Spider extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(private game: Game) {
        super();

        this.pos = new Vector(150, 150);

        this.scale = new Vector(0.3, 0.3);

        const spiderSheetWalking = new SpriteSheet(
            Resources.spiderBigWalk,
            5,
            2,
            920,
            800
        );

        const animationWalking = spiderSheetWalking.getAnimationForAll(
            this.game,
            30
        );

        this.addDrawing("bigSpiderWalk", animationWalking);

        console.log("adding spider");
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
