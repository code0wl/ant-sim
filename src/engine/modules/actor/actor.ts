import { actorStore } from "engine/modules/actor/store";
import {
    spriteSheetLocation,
    createSpriteObject,
} from "common/util/animation-loader";
import { Sprite } from "common/model";

export class Actor {
    private id: number;
    public graphics: Sprite[];
    constructor(imageUrl: string[]) {
        this.addGraphic(imageUrl);
        this.addToStore();
    }

    private addGraphic(imageLibrary: string[]) {
        // add graphic to actor object
        this.graphics = imageLibrary.reduce((acc, next) => {
            const spriteSheet = spriteSheetLocation(next);
            return createSpriteObject({
                height: 500,
                width: 500,
                image: spriteSheet,
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
