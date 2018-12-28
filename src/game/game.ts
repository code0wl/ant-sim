declare const cc: any;

export class Game {
    public canvas: HTMLCanvasElement;

    constructor(width, height, id) {
        this.generateWorld(width, height);

        cc.game.onStart = function() {
            //load resources
            cc.LoaderScene.preload(
                ["HelloWorld.png"],
                () => {
                    var MyScene = cc.Scene.extend({
                        onEnter: function() {
                            this._super();
                            var size = cc.director.getWinSize();
                            var sprite = cc.Sprite.create("HelloWorld.png");
                            sprite.setPosition(size.width / 2, size.height / 2);
                            sprite.setScale(0.8);
                            this.addChild(sprite, 0);
                        },
                    });
                    cc.director.runScene(new MyScene());
                },
                this
            );
        };
        cc.game.run(id);
    }

    private generateWorld(width, height, id) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.id = id;
        document.body.appendChild(this.canvas);
    }

    public removeWorld() {
        const currentCanvas = document.querySelector("canvas");
        document.removeChild(currentCanvas);
    }
}
