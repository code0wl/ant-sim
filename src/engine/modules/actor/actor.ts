import { actorStore } from "engine/modules/actor/store";
import { spriteSheetLocation } from "common/util/animation-loader";
import { IAnimationType, IActorType } from "common/model";
import { Point } from "../draw/point";

export class Actor {
    public graphics: any;

    public actorID: number;

    private tick = 0;
    private ticksPerFrame = 1;
    private frameIndex = 0;
    private numberOfFrames = 5;

    constructor(
        public type: IActorType,
        public coordinates: Point,
        animationType?: IAnimationType
    ) {
        if (animationType) {
            this.addGraphic(animationType);
        }
        this.addToStore();
    }

    private addGraphic(animationType: IAnimationType) {
        this.graphics = Object.values(animationType)
            .reduce((prev, next) => {
                prev.push(spriteSheetLocation(next));
                return prev;
            }, [])
            .map((image: HTMLImageElement) => ({ image }));
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

    public destroy(id: number) {
        actorStore.forEach(actor => {
            if (actor.id === id) {
                actorStore.delete(actor);
            }
        });
    }

    public getLocation() {
        return this.coordinates;
    }

    private addToStore() {
        this.actorID = actorStore.size;
        actorStore.add(this);
    }
}
