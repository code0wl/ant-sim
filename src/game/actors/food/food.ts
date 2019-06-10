import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { Colors, actorType } from "common/model";

export class Food extends Actor {
    public width = 10;
    public height = 10;

    constructor(public coordinates: Point) {
        super(actorType.food);
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (!this.width) return;
        ctx.fillStyle = Colors.food;
        ctx.fillRect(
            this.coordinates.x,
            this.coordinates.y,
            this.width,
            this.height
        );
    }
}
