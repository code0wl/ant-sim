import { Grid } from "game/grid";
import {
    Engine,
    Loader,
    SpriteSheet,
    Texture,
    DisplayMode,
    Color,
    Actor,
    Vector,
} from "excalibur";
import { Ant } from "actors/ant/ant.class";

export class Game {
    public grid: Grid;
    public app: ex.Engine;

    constructor(size: number) {
        this.app = new Engine({
            backgroundColor: Color.fromHex("#50c878"),
        });

        this.bootstrapGame();
        this.grid = new Grid(size);
    }
    public bootstrapGame() {
        const blackIdleTexture = new Texture(
            "spritesheets/__black_ant_idle-71x90.png"
        );
        const blackIdleAnimation = new SpriteSheet(
            blackIdleTexture,
            5,
            3,
            14,
            22.6
        );

        const loader = new Loader([blackIdleTexture]);

        this.app.start(loader).then(() => {
            var player = new Actor();

            var playerIdleAnimation = blackIdleAnimation.getAnimationForAll(
                this.app,
                30
            );

            player.pos = new Vector(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

            player.addDrawing("idle", playerIdleAnimation);
            this.app.add(player);
        });
    }
}
