import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";
import { canvas } from "index";

export class Grid {
    constructor(dimensions: Point) {
        this.drawGrid(dimensions);
    }

    public debug() {
        canvas.getContext().strokeStyle = "black";
        canvas.getContext().stroke();
    }

    // think of better type
    public intersections(elements: IAnimal[]) {
        // pass event when actors have intersected
    }

    public getCell(map: IMap) {}

    private drawGrid({ x, y }: Point) {
        const bw = x;
        const bh = y;
        const p = 10;

        for (let x = 0; x <= bw; x += 40) {
            canvas.getContext().moveTo(0.5 + x + p, p);
            canvas.getContext().lineTo(0.5 + x + p, bh + p);
        }

        for (let x = 0; x <= bh; x += 40) {
            canvas.getContext().moveTo(p, 0.5 + x + p);
            canvas.getContext().lineTo(bw + p, 0.5 + x + p);
        }
    }
}
