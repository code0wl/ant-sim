import { actorStore } from "engine/modules/actor/store";
import {
    spriteSheetLocation,
    createSpriteObject,
} from "common/util/animation-loader";
import { Sprite, IAnimationType } from "common/model";

export class Actor {
    public graphics: Sprite[];
    private id: number;

    constructor(imageUrl: IAnimationType) {
        this.addGraphic(imageUrl);
        this.addToStore();
    }

    private addGraphic(imageLibrary: IAnimationType[]) {
        // add graphic to actor object

        const images: HTMLImageElement[] = [];

        this.graphics = imageLibrary.reduce((_, next) => {
            const image = spriteSheetLocation(next);

            images.push(image);

            return createSpriteObject({
                height: 500,
                width: 500,
                image: images,
            });
        }, []);

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
