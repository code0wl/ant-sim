export class Grid {
    readonly gridSize: Number;

    constructor(size: number) {
        this.renderGrid(size);
    }

    private renderGrid(cells) {
        for (const cell of cells) {
            console.log(cell);
        }
    }

    debug() {
        //adds lines around grid boxes
    }
}
