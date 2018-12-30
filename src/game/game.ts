import { Grid } from "game/grid";
import { Engine, Loader, Color } from "excalibur";
import { Resources } from "common/resources";
import { Ant } from "actors/ant/ant.class";

export class Game {
    public grid: Grid;
    public app: ex.Engine;

    private loader: Loader;

    constructor(size: number) {
        this.app = new Engine({
            backgroundColor: Color.fromHex("#50c878"),
        });
        this.preloadGame();
        this.bootstrapGame();
        this.grid = new Grid(size);
    }

    private preloadGame() {
        this.loader = new Loader([Resources.blackAntIdle]);
    }

    private bootstrapGame() {
        this.app.start(this.loader).then(() => {
            this.app.add(new Ant(this));
        });
    }
}
