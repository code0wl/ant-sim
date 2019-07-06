import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { Colors, actorType } from "common/model";

export class Food extends Actor {
    private radius = 20;

    constructor() {
        super(actorType.food);
        this.coordinates = new Point(100, 90);
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
        this.radius--;
    }
}
