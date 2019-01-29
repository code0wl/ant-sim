import { IAnimal, Point } from "common/model";

export abstract class Animal  implements IAnimal {
    public abstract isAlive: boolean;

    public abstract isMoving: boolean;

    public abstract move({ x, y }: Point): void;

    public abstract eat(): void;

    public abstract attack(): void;
}
