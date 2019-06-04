import { Point } from "common/model";

export class Nest {
    constructor(public size: Point, public coordinates: Point) {
        // canvas.getContext draw element
    }

    destroy() {
        this.size = { x: 0, y: 0 };
    }

    getPopulation() {
        // return ant population
    }

    getFoodSupply() {
        // return ant foodsupply
    }
}
