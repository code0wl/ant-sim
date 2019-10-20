import { Colony } from "game/actors/ant/model";
import { Engine } from "engine/engine";
import { Point } from "engine/modules/draw/point";
import { Nest } from "./actors/nest/nest";
import { spiderType, ISpiderConfig } from "./actors/spider/model";
import { Spider } from "./actors/spider/spider";
import { Food } from "./actors/food/food";
import { IGameConfig, game, gameConfig } from "index";
import {
    getRandomInt,
    boundedCell,
    generateRandomCoordinates,
} from "common/util/movement.utils";
import { currentResolution } from "common/util/center";
import { CanvasInstance } from "engine/modules/draw/canvas";

export class Game extends Engine {
    constructor(private gameConfig: IGameConfig) {
        super(gameConfig.fps);
        this.createFood();
        this.createNests(["black", "red"]);
        this.createSpiders();
    }

    private createFood() {
        while (this.gameConfig.foodAmount > 0) {
            this.gameConfig.foodAmount--;
            new Food(
                new Point(
                    boundedCell(getRandomInt(currentResolution.x)),
                    boundedCell(getRandomInt(currentResolution.y))
                )
            );
        }
    }

    private createSpiders() {
        const { width, height } = CanvasInstance.getCanvas();
        for (let i = 0; i < gameConfig.bigSpiders; i++) {
            new Spider(spiderType.large, new Point(width / 2, height / 2));
        }
    }

    private createNests(nests: Colony[]) {
        nests.forEach(nest => new Nest(nest, this.gameConfig.startPopulation));
    }
}
