declare const cc: any;

export class Game {
    public canvas: HTMLCanvasElement;

    constructor(
        private width: number,
        private height: number,
        private id: string
    ) {
        this.generateWorld();
        this.start(this.width, this.height);
    }

    private start(width, height) {
        cc.game.onStart = () => {
            cc.LoaderScene.preload(
                ["HelloWorld.png"],
                () => {
                    const MyScene = cc.Scene.extend({
                        onEnter: function() {
                            this._super();
                            const sprite = cc.Sprite.create("HelloWorld.png");
                            sprite.setPosition(width / 2, height / 2);
                            sprite.setScale(0.8);
                            this.addChild(sprite, 0);
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
