import { Animal } from "common/animal.class";
import { Coordinates, Colony } from "common/model";
import { Actor, SpriteSheet, Texture, Loader, Vector } from "excalibur";
import { Game } from "game/game";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(private game: Game, type?: Colony) {
        super();

        this.idle();
    }

    public idle() {
        const player = new Actor();
        player.addDrawing("idle", this.game.animations().blackIdleAnimation);
        // player.pos = new Vector(window.innerWidth / 2, window.innerHeight / 2);
        this.game.app.add(player);
    }

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
