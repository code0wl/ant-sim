import { Point } from "common/model";

export class Food {
    constructor(public amount: number, public coordinates: Point) {
        this.generateFood();
    }

    private generateFood() {}
}
