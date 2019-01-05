import { IMap } from "game/model";
import { currentResolution } from "common/util/center";
import { Actor } from "excalibur";

export class Grid extends Actor {
    private rows: number;
    private cols: number;

    constructor() {
        super();
        this.renderGrid(2);
    }

    public debug() {
        // adds lines around grid boxes
    }
    // think of better type
    public interasections(elements: any) {
        // pass event when actors have intersected
    }

    public getCell(map: IMap) {}

    private renderGrid(cellScale: number) {
        const { x, y } = currentResolution;

        for (let i = 0; i < x; i += cellScale) {}

        for (let i = 0; i < y; i += cellScale) {}
    }
}

const gridSystem = new Grid();

// exporting a pointer,
// do not know if this is anti-pattern
export { gridSystem };
