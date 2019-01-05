import { IAnimal, Point } from "common/model";
import { Actor } from "excalibur";

export abstract class Animal extends Actor implements IAnimal {
    public abstract isAlive: boolean;

    public abstract isMoving: boolean;

    public abstract move({ x, y }: Point): void;

    public abstract eat(): void;

    public abstract attack(): void;
}
