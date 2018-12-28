export class Game {
    public canvas: HTMLCanvasElement;

    constructor(width, height) {
        this.generateWorld(width, height);
    }

    private generateWorld(width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.id = "gameCanvas";
        document.body.appendChild(this.canvas);
    }

    public removeWorld() {
        const currentCanvas = document.querySelector("canvas");
        document.removeChild(currentCanvas);
    }
}
