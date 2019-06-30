import { Point } from "engine/modules/draw/point";
import { Actor } from "engine/modules/actor/actor";
import { Colors, actorType } from "common/model";
import { getActor } from "common/util/aggregator";
import { nestCoordinates } from "./model";
import { Colony, antType } from "../ant/model";
import { Ant } from "../ant/ant";

export class Nest extends Actor {
    public radius = 15;
    public foodStores: number;
    public totalPopulation: number;

    constructor(private nestType: Colony, startingPopulation: number) {
        super(actorType.nest);
        this.coordinates = new Point(
            nestCoordinates[this.nestType].x,
            nestCoordinates[this.nestType].y
        );

        this.foodStores = startingPopulation;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = Colors.nest;
        ctx.beginPath();
        ctx.arc(
            this.coordinates.x,
            this.coordinates.y,
            this.radius,
            0,
            2 * Math.PI
        );
        ctx.fill();

        this.displayPopulationCount(ctx);
        this.displayFoodCount(ctx);
        this.spawnAnt();
    }

    private spawnAnt() {
        if (this.foodStores > 0) {
            new Ant(antType[this.nestType], this);
            this.foodStores--
        }
    }

    private displayPopulationCount(ctx: CanvasRenderingContext2D) {
        this.totalPopulation = getActor(
            actorType.ant,
            antType[this.nestType]
        ).length;

        ctx.fillText(
            `Population: ${this.totalPopulation}`,
            this.coordinates.x - 30,
            this.coordinates.y - 30
        );
    }

    private displayFoodCount(ctx: CanvasRenderingContext2D) {
        ctx.fillText(
            `Food supply: ${this.foodStores}`,
            this.coordinates.x - 30,
            this.coordinates.y - 17
        );
    }
}
