import { IAnimal, Coordinates } from "common/model";

export abstract class Animal implements IAnimal {
    public abstract isAlive: boolean;

    public abstract isMoving: boolean;

    public abstract move({ longitude, latitude }: Coordinates): void;

    public abstract eat(): void;
}
