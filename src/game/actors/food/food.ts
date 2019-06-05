import { Cell } from "engine/modules/draw/cell";
import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { IAnimationType, currentState } from "common/model";

export class Food extends Actor {
    public currentState: currentState = currentState.idle;

    constructor(images: IAnimationType, public coordinates: Point) {
        super("food", images, coordinates);
    }

    remove(cell: Cell) {
        cell.removeActor();
    }
}
