import { IMap } from "game/model";
import { Point, IAnimal } from "common/model";

export class Grid {

    constructor(canvas: Point) {
    }

    public debug() {
        // adds lines around grid boxes
    }

    // think of better type
    public intersections(elements: IAnimal[]) {
        // pass event when actors have intersected
    }

    public getCell(map: IMap) {}

}

const gridSystem = new Grid({x: 100, y: 100});

// exporting a pointer,
export { gridSystem };
