import { IActor } from "common/model";

export class Cell {
    actor: IActor;
    constructor(public cellID: number, public x: number, public y: number) {}

    public hasItem(): Boolean {
        return false;
    }

}
