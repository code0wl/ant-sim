import { Animal } from "common/animal.class";
import { Coordinates, Colony } from "common/model";
import { Game } from "game/game";

export class Ant extends Animal {
    readonly currentLocation: Coordinates;
    public isAlive = true;
    public isMoving = false;

    constructor(private game: Game, type?: Colony) {
        super();

        this.setWidth(25);
        this.setHeight(25);
        this.x = 150;
        this.y = 150;
    }

    public idle() {}

    public move() {}

    public eat() {}

    public fight() {}

    public getLocation() {
        return this.currentLocation;
    }
}
