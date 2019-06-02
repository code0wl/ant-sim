import { actorStore } from "engine/modules/actor/store";
import {
    spriteSheetLocation,
    createSpriteObject,
} from "common/util/animation-loader";
import { IAnimationType, IAnimalType } from "common/model";

export class Actor {
    public graphics: any;

    public id: number;
    public tick = 0;
    public ticksPerFrame = 1;
    public frameIndex = 0;
    public numberOfFrames = 5;

    constructor(
        public type: IAnimalType,
        animationType: IAnimationType,
    ) {
        this.addGraphic(animationType);
        this.addToStore();
    }

    private addGraphic(imageLibrary: IAnimationType) {
        this.graphics = [imageLibrary]
            .reduce((prev, next) => {
                prev.push(spriteSheetLocation(next));
                return prev;
            }, [])
            .map(image =>
                createSpriteObject({
                    image,
                })
            );
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

    private addToStore() {
        this.id = actorStore.size;
        actorStore.add(this);
    }
}
