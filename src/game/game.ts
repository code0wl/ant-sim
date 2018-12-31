import { Grid } from "game/grid";
import { Engine, Loader, Color } from "excalibur";
import { Resources } from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { AntFarm } from "game/antfarm.class";

export class Game extends Engine {
    public grid: Grid;
    public app: ex.Engine;
    public loader: Loader;

    constructor(public mapSize: number, public colonySize: number) {
        super({
            suppressPlayButton: true,
            backgroundColor: Color.fromHex("#50c878"),
        });

        this.grid = new Grid(this.mapSize);
    }

    public preloadGame() {
        this.loader = new Loader(Object.values(Resources));
        this.bootstrapGame();
    }

    private bootstrapGame() {
        const antFarm = new AntFarm();
        // const nest = new Nest(this.canvas)

        for (let i = 0; i < this.colonySize; i++) {
            const ant = new Ant(this);
            antFarm.add(ant);
        }

        this.add("antFarm", antFarm);

        this.start(this.loader).then(() => {
            this.goToScene("antFarm");
        });
    }
}
