import { Grid } from "game/grid";
import { Engine, Loader, SpriteSheet, Texture, Actor, Vector } from "excalibur";

export class Game {
    public grid: Grid;
    public app: ex.Engine;

    public loader: Loader;

    constructor(private width: number, private height: number, size: number) {
        this.bootstrapGame();
        this.grid = new Grid(size);
    }

    public animations(): any {
        const blackIdleTexture = new Texture(
            "spritesheets/__black_ant_idle-239x303.png"
        );
        return {
            blackIdleTexture,
            blackIdleAnimation: new SpriteSheet(blackIdleTexture, 5, 4, 48, 76),
        };
    }
    private bootstrapGame() {
        this.app = new Engine();
        const loader = new Loader([this.animations().blackIdleTexture]);
        this.app.start(loader);
    }
}
