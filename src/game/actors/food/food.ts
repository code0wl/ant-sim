import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { Colors, actorType } from "common/model";

export class Food extends Actor {
    private radius = 40;

    constructor(public coordinates: Point) {
        super(actorType.food);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = Colors.food;
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

    public removeFood() {
        if (!this.radius) {
            this.remove();
        }
        this.radius -= 1;
    }
}
