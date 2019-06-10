import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { currentState, Colors, actorType } from "common/model";

export class Food extends Actor {
    public amount = 30;
    public currentState: currentState = currentState.idle;

    constructor(public coordinates: Point) {
        super(actorType.food);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = Colors.food;
        for (let x = 0; x < this.amount; x++) {
            for (let y = 0; y < this.amount; y++) {
                ctx.fillRect(
                    this.coordinates.x + y,
                    this.coordinates.y + x,
                    1,
                    1
                );
            }
        }
    }
}
