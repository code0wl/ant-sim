import { Point, ICell } from "common/model";

export class Food {
    constructor(public amount: number, public coordinates: Point) {
        // canvas.getContext
    }

    removeFood(cell: ICell) {
        cell.removeFood();
    }
}
