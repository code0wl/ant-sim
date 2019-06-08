import { actorStore } from "engine/modules/actor/store";
import { IActorType } from "common/model";
import { Point } from "../draw/point";

export class Actor {
    public width: number;
    public height: number;
    public numberOfFrames = 5;
    public actorID: number;
    public coordinates: Point;
    public frameIndex = 0;
    public currentState: number;

    private tick = 0;
    private ticksPerFrame = 1;

    constructor(public type: IActorType) {
        this.addToStore();
    }

    public update() {
        this.tick += 1;

        if (this.tick > this.ticksPerFrame) {
            this.tick = 0;

            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex += 1;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    private addToStore() {
        this.actorID = actorStore.size;
        actorStore.add(this);
    }
}
