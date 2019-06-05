import { Point } from "common/model";
import { Cell } from "engine/modules/draw/cell";

export class Food {
    constructor(public amount: number, public coordinates: Point) {
        // canvas.getContext
    }

    remove(cell: Cell) {
        cell.removeItem();
    }

    add() {

    }
}
