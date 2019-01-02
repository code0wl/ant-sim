import { Grid } from "game/grid";
import { Engine, Loader, Color } from "excalibur";
import { Resources } from "common/resources";
import { Ant } from "actors/ant/ant.class";
import { AntFarm } from "game/antfarm.class";
import { Spider } from "actors/spider/spider.class";
import { spiderType } from "actors/spider/model";
import { antType } from "actors/ant/model";

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

    public get game() {
        return this;
    }

    public preloadGame() {
        this.loader = new Loader(Object.values(Resources));
        this.bootstrapGame();
    }

    private bootstrapGame() {
        const antFarm = new AntFarm();

        for (let i = 0; i < this.colonySize; i++) {
            const ant = new Ant(antType.black);
            antFarm.add(ant);
        }

        for (let i = 0; i < this.colonySize; i++) {
            const ant = new Ant(antType.red);
            antFarm.add(ant);
        }

        const spider = new Spider(spiderType.extra);

        const spiderSmall = new Spider(spiderType.small);

        const spiderMedium = new Spider(spiderType.medium);

        const spiderLarger = new Spider(spiderType.larger);

        [spider, spiderSmall, spiderMedium, spiderLarger].forEach(spider => {
            antFarm.add(spider);
        });

        this.add("antFarm", antFarm);

        this.start(this.loader).then(() => {
            this.goToScene("antFarm");
        });
    }
}
