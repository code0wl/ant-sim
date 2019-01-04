import { IMap } from "game/model";
import { currentResolution } from "common/util/center";
import { Actor } from "excalibur";

export class Grid extends Actor {
    constructor() {
        super();
        this.renderGrid(2);
    }

    public debug() {
        // adds lines around grid boxes
    }
    // think of better type
    public interasections(elements: any) {
        // pass event when elements have intersected
    }

    public getCell(map: IMap) {}

    private renderGrid(cellSize: number) {
        const { x, y } = currentResolution;

        for (let i = 0; i < x; i += cellSize) {}

        for (let i = 0; i < y; i += cellSize) {}
    }
}

const gridSystem = new Grid();

// exporting a pointer,
// do not know if this is anti-pattern
export { gridSystem };
