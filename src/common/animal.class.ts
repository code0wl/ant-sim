import { IAnimal, Coordinates } from "common/model";
import { Actor } from "excalibur";

export abstract class Animal extends Actor implements IAnimal {
    public abstract isAlive: boolean;

    public abstract isMoving: boolean;

    public abstract move({ longitude, latitude }: Coordinates): void;

    public abstract eat(): void;

    public abstract attack(): void;
}
