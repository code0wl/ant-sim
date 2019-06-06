import { Actor } from "../actor/actor";

export class Cell {
    actor: Actor;
    constructor(public cellID: number, public x: number, public y: number) {}

    public hasItem(): Boolean {
        return false;
    }

    public addItem(actor: Actor) {
        this.actor = actor;
    }
}
