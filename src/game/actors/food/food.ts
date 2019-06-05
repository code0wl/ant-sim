import { Point } from "common/model";
import { Cell } from "engine/modules/draw/cell";
import { Actor } from "engine/modules/actor/actor";

export class Food extends Actor {
    constructor(public coordinates: Point) {
        super();
    }

    remove(cell: Cell) {
        cell.removeActor();
    }
}
