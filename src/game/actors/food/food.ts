import { Cell } from "engine/modules/draw/cell";
import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { currentState } from "common/model";

export class Food extends Actor {
    public width = 80;
    public height = 27;
    public currentState: currentState = currentState.idle;

    constructor(public coordinates: Point) {
        super("food", coordinates);
    }

    remove(cell: Cell) {
        cell.removeActor();
    }
}
