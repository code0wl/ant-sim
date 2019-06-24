import { Point } from "engine/modules/draw/point";
import { Actor } from "engine/modules/actor/actor";
import { Colors, actorType } from "common/model";
import { getActor } from "common/util/aggregator";
import { nestCoordinates } from "./model";
import { Colony, antType } from "../ant/model";

export class Nest extends Actor {
    public radius = 15;
    public foodStores = 0;

    constructor(private nestType: Colony) {
        super(actorType.nest);
        this.coordinates = new Point(
            nestCoordinates[this.nestType].x,
            nestCoordinates[this.nestType].y
        );
    }

    draw(ctx: CanvasRenderingContext2D) {
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
    }

    private displayPopulationCount(ctx: CanvasRenderingContext2D) {
        const totalPopulation = getActor(
            actorType.ant,
            antType[this.nestType]
        );

        ctx.fillText(
            `Population: ${totalPopulation.length}`,
            this.coordinates.x - 30,
            this.coordinates.y - 30
        );
    }

    private getFoodSupplyAmount() {
        // return ant foodsupply
    }
}
