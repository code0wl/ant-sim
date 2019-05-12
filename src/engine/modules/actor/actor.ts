import { actorStore } from "engine/modules/actor/store";
import {
    spriteSheetLocation,
    createSpriteObject,
} from "common/util/animation-loader";
import { Sprite, IAnimationType } from "common/model";

export class Actor {
    public graphics: Sprite[];
    private id: number;

    constructor(animationType: IAnimationType[]) {
        this.addGraphic(animationType);
        this.addToStore();
    }

    private addGraphic(imageLibrary: IAnimationType[]) {
        // add graphic to actor object

        this.graphics = imageLibrary
            .reduce((prev, next) => {
                const image = spriteSheetLocation(next);
                prev.push(image);
                return prev;
            }, [])
            .map(image =>
                createSpriteObject({
                    height: 500,
                    width: 500,
                    image,
                })
            );

            console.log(this.graphics)
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
