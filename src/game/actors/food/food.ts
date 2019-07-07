import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { Colors, actorType } from "common/model";

export class Food extends Actor {
    public radius = 15;

    constructor(public coordinates: Point) {
        super(actorType.food);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        if (!this.radius) this.remove();

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
        this.radius = this.radius - 3 >= 0 ? (this.radius += 0.5) : 0;
    }
}
