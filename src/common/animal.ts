import { IAnimal, Point, IAnimationType, IAnimalType, currentState } from "common/model";
import { Actor } from "engine/modules/actor/actor";

export class Animal extends Actor implements IAnimal {
    public readonly currentLocation: Point;
    public isAlive = true;
    public isMoving = false;

    constructor(type: IAnimalType, imageUrls: IAnimationType, state: currentState) {
        super(type, imageUrls, state);
    }
}
