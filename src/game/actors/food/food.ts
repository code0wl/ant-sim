import { Cell } from "engine/modules/draw/cell";
import { Actor } from "engine/modules/actor/actor";
import { Point } from "engine/modules/draw/point";
import { currentState } from "common/model";

export class Food extends Actor {
    public width = 2;
    public height = 2;
    public currentState: currentState = currentState.idle;

    constructor(public coordinates: Point) {
        super("food", coordinates);
    }

    remove(cell: Cell) {
        cell.removeActor();
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(
            this.coordinates.x,
            this.coordinates.y,
            this.width,
            this.height
        );
    }
}
