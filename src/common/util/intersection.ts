import { Cell } from "engine/modules/draw/cell";
import { IActor } from "common/model";

export function mapIntersections(cell: Cell, actor: IActor, cellSize: number) {
    const width = actor.numberOfFrames
        ? actor.width / actor.numberOfFrames
        : actor.width;

    return !(
        actor.coordinates.x > cell.x + cellSize ||
        actor.coordinates.x + width < cell.x ||
        actor.coordinates.y > cell.y + cellSize ||
        actor.coordinates.y + actor.height < cell.y ||
        actor.coordinates.y + actor.radius < cell.y ||
        actor.coordinates.x + actor.radius < cell.x
    );
}
