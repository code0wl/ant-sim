import { Animal } from "../common/animal.class";

export class Ant extends Animal {
    public isAlive = true;
    public isMoving = false;

    constructor() {
        super();
        console.log("ant");
    }

    public move(x, y) {}

    public eat() {}

    public fight() {}

    private getCoordinates() {}
}
