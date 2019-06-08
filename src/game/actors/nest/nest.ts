import { Point } from "engine/modules/draw/point";
import { Actor } from "engine/modules/actor/actor";
import { Colors, actorType } from "common/model";

export class Nest extends Actor {
    public radius = 15;

    constructor(public coordinates: Point) {
        super(actorType.nest);
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
    }

    getPopulation() {
        // return nest population
    }

    getFoodSupply() {
        // return ant foodsupply
    }
}
