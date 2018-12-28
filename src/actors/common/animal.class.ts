import { IAnimal } from "./model";

export abstract class Animal implements IAnimal {
    public abstract isAlive;

    public abstract isMoving;

    public abstract move(x, y);

    public abstract eat();
}
