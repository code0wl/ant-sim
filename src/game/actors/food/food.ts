import { Point } from "common/model";
import { canvas } from "index";

export class Food {
    constructor(public amount: number, public coordinates: Point) {
        // canvas.getContext
    }

    removeFood() {
        this.amount--;
    }
}
