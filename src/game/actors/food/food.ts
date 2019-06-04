import { Point } from "common/model";

export class Food {
    constructor(public amount: number, public coordinates: Point) {
        // canvas.getContext
    }

    removeFood() {
        this.amount--;
    }
}
