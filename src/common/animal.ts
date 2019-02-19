import { IAnimal, Point, Sprite } from "common/model";
import { Actor } from "engine/modules/actor/actor";

export class Animal extends Actor implements IAnimal {
    public readonly currentLocation: Point;

    public isAlive = true;
    public isMoving = false;

    constructor(imageUrl: Sprite[]) {
        super(imageUrl);
    }
}
