import { Grid } from "game/grid";
import { Engine, Loader, Color, Texture } from "excalibur";
import { Resources } from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { AntFarm } from "game/antfarm.class";
import { Nest } from "props/nest.class";

export class Game extends Engine {
    public grid: Grid;
    public app: ex.Engine;
    public colonySize: number;
    public loader: Loader;

    constructor(size: number) {
        super({
            suppressPlayButton: true,
            backgroundColor: Color.fromHex("#50c878"),
        });

        this.grid = new Grid(size);
    }

    public preloadGame(colonySize: number) {
        this.colonySize = colonySize;
        this.loader = new Loader([Resources.blackAntIdle]);

        Object.entries(Resources)
            .filter(resource => {
                typeof resource === "string";
            })
            .forEach((resource: any) => {
                this.loader.addResource(resource);
            });

        this.bootstrapGame();
    }

    private bootstrapGame() {
        const antFarm = new AntFarm();
        const nest = new Nest(this.canvas)

        for (let i = 0; i < this.colonySize; i++) {
            const ant = new Ant();
            antFarm.add(ant);
        }

        this.add("antFarm", antFarm);

        this.start(this.loader).then(() => {
            this.goToScene("antFarm");
        });
    }
}
