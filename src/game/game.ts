import { Colony } from "game/actors/ant/model";
import { Engine } from "engine/engine";
import { Point } from "engine/modules/draw/point";
import { Nest } from "./actors/nest/nest";
import { spiderType, ISpiderConfig } from "./actors/spider/model";
import { Spider } from "./actors/spider/spider";
import { Food } from "./actors/food/food";
import { IGameConfig } from "index";

export class Game extends Engine {
    constructor(private gameConfig: IGameConfig) {
        super();
        this.createFood();
        this.createNests(["black", "red"]);
        this.createSpiders([
            { spider: spiderType.large, coordinates: new Point(100, 600) },
            { spider: spiderType.small, coordinates: new Point(500, 300) },
        ]);
    }

    private createFood() {
        new Food(new Point(110, 110));
        new Food(new Point(1400, 600));
    }

    private createSpiders(spiderConfig: ISpiderConfig[]) {
        spiderConfig.forEach(
            ({ spider, coordinates }) => new Spider(spider, coordinates)
        );
    }

    private createNests(nests: Colony[]) {
        nests.forEach(nest => new Nest(nest, this.gameConfig.startPopulation));
    }
}
