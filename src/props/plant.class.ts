import { Actor } from "excalibur";
import { Resources } from "common/resources";

export class Plant extends Actor {
    constructor() {
        super();
        this.addDrawing(Resources.blackAntIdle);
    }
}
