import { Engine, Loader, Color } from "excalibur";
import { Resources } from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { AntFarm } from "game/antfarm.class";
import { Spider } from "actors/spider/spider.class";
import { spiderType } from "actors/spider/model";
import { antType } from "actors/ant/model";
import { IMap } from "game/model";
import { Grid, gridSystem } from "game/grid";

export class Game extends Engine {
    public loader: Loader;
    public grid: Grid;

    constructor(public map: IMap, public colonySize: number) {
        super({
            suppressPlayButton: true,
            backgroundColor: Color.fromHex("#50c878"),
        });
    }

    public preloadGame() {
        const textures = Object.values(Resources).reduce((acc, next) => {
            acc.push(...Object.values(next));
            return acc;
        }, []);

        this.loader = new Loader(textures);

        this.grid = gridSystem;

        this.bootstrapGame();
    }

    private bootstrapGame() {
        const antFarm = new AntFarm();

        for (let i = 0; i < this.colonySize; i++) {
            antFarm.add(new Ant(antType.red));
            antFarm.add(new Ant(antType.black));
        }

        // pass this to the game directory
        [
            new Spider(spiderType.extra),
            new Spider(spiderType.small),
            new Spider(spiderType.medium),
            new Spider(spiderType.larger),
        ].forEach(spider => {
            antFarm.add(spider);
        });

        this.add("antFarm", antFarm);

        this.start(this.loader).then(() => {
            this.goToScene("antFarm");
        });
    }
}
