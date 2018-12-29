import { Grid } from "./grid";

declare const cc: any;

export class Game {
    public canvas: HTMLCanvasElement;
    public grid: Grid;

    constructor(
        private width: number,
        private height: number,
        private id: string,
        size: number
    ) {
        this.generateWorld();
        this.start(this.width, this.height);
        this.grid = new Grid(size);
    }

    private start(width, height) {
        cc.game.onStart = () => {
            cc.LoaderScene.preload(
                ["HelloWorld.png"],
                () => {
                    const MyScene = cc.Scene.extend({
                        onEnter: function() {
                            this._super();
                            const colorLayer = new cc.LayerColor(
                                cc.color(80, 220, 100, 200),
                                width,
                                height
                            );
                            colorLayer.ignoreAnchorPointForPosition(false);

                            colorLayer.x = width / 2;
                            colorLayer.y = height / 2;

                            this.addChild(colorLayer);
                        },
                    });
                    cc.director.runScene(new MyScene());
                },
                this
            );
        };
        cc.game.run(this.id);
    }

    private generateWorld() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.id = this.id;
        document.body.appendChild(this.canvas);
    }

    public removeWorld() {
        const currentCanvas = document.querySelector("canvas");
        document.removeChild(currentCanvas);
    }
}
