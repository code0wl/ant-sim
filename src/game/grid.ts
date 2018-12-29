export class Grid {
    readonly gridSize: Number;

    constructor(size: number) {
        this.renderGrid(size);
    }

    private renderGrid(cells: number) {
        for (let i = 0; i < cells; i++) {
            console.log(i);
        }
    }

    debug() {
        //adds lines around grid boxes
    }
}
