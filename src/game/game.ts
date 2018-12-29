import { Grid } from "game/grid";

declare const cc: any;

export class Game {
    public canvas: HTMLCanvasElement;
    public grid: Grid;
    public gameInstance: any;
    public scene: any;

    constructor(
        private width: number,
        private height: number,
        private id: string,
        size: number
    ) {
        this.bootstrapGame();
        this.grid = new Grid(size);
    }

    private bootstrapGame() {
        this.createCanvas();
        this.gameInstance = cc.game;
        this.gameInstance.onStart = () => this.start(this.width, this.height);
        this.gameInstance.run(this.id);
    }

    private start(width: number, height: number) {
        cc.LoaderScene.preload(
            [
                "spritesheets/__black_ant_dead.png",
                "spritesheets/__black_ant_idle.png",
                "spritesheets/__black_ant_walk.png",
                "spritesheets/__red_ant_dead.png",
                "spritesheets/__red_ant_idle.png",
                "spritesheets/__red_ant_walk.png",
            ],
            () => {
                this.scene = cc.Scene.extend({
                    onEnter: function() {
                        this._super();

                        this.addChild(
                            new cc.LayerColor(
                                cc.color(80, 220, 100, 200),
                                width,
                                height
                            )
                        );
                    },
                });
                cc.director.runScene(new this.scene());
            },
            this
        );
    }

    private createCanvas() {
        this.removeCanvas();
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.id = this.id;
        document.body.appendChild(this.canvas);
    }

    public removeCanvas() {
        const currentCanvas = document.querySelector("canvas");
        if (!currentCanvas) return;
        document.removeChild(currentCanvas);
    }
}
