import { Grid } from "game/grid";
import * as BABYLON from "babylonjs";

export class Game {
    public grid: Grid;

    private canvas: HTMLCanvasElement;
    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;
    private camera: BABYLON.FreeCamera;
    private light: BABYLON.Light;

    constructor(private width: number, private height: number, size: number) {
        this.bootstrapGame();
        this.grid = new Grid(size);
    }

    private bootstrapGame() {
        this.createCanvas();
    }

    private createCanvas() {
        this.removeCanvas();
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.engine = new BABYLON.Engine(this.canvas, true);
        document.body.appendChild(this.canvas);
    }

    public removeCanvas() {
        const currentCanvas = document.querySelector("canvas");
        if (!currentCanvas) return;
        document.removeChild(currentCanvas);
    }
}
