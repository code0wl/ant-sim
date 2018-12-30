import { Grid } from "game/grid";

export class Game {
    public grid: Grid;

    private canvas: HTMLCanvasElement;

    constructor(private width: number, private height: number, size: number) {
        this.bootstrapGame();
        this.grid = new Grid(size);
    }

    private bootstrapGame() {
        this.createCanvas();
    }

    private createCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);
    }
}
