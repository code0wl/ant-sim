import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { currentState, Colors } from "common/model";

export class Food extends Actor {
    public width = 5;
    public height = 5;
    public currentState: currentState = currentState.idle;

    constructor(public coordinates: Point) {
        super("food", coordinates);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = Colors.food;
        ctx.fillRect(
            this.coordinates.x,
            this.coordinates.y,
            this.width,
            this.height
        );
    }
}
