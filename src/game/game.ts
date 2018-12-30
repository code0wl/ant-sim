import { Grid } from "game/grid";

export class Game {
    public grid: Grid;

    constructor(private width: number, private height: number, size: number) {
        this.preloadGame();
        this.bootstrapGame();
        this.grid = new Grid(size);
    }

    private preloadGame() {}

    private bootstrapGame() {}
}
