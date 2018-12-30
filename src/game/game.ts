import { Grid } from "game/grid";
import {
    Engine,
    Loader,
    SpriteSheet,
    Texture,
    DisplayMode,
    Color,
} from "excalibur";
import { Ant } from "actors/ant/ant.class";

export class Game {
    public grid: Grid;
    public app: ex.Engine;

    constructor(size: number) {
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
    public bootstrapGame() {
        this.app = new Engine({
            backgroundColor: Color.fromHex("#50c878"),
            displayMode: DisplayMode.FullScreen,
        });
        const loader = new Loader([this.animations().blackIdleTexture]);
        this.app.start(loader).then(() => {
            new Ant(this);
        });
    }
}
