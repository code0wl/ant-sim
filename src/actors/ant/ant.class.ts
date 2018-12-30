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
    }

    public idle() {}

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
