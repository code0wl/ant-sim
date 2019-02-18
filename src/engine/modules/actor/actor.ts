import { actorStore } from "engine/modules/actor/store";
import {
    spriteSheetLocation,
    createSpriteObject,
} from "common/util/animation-loader";

export class Actor {
    private id: number;
    private spriteObject: Actor;
    constructor(imageUrl: string) {
        this.addGraphic(imageUrl);
        this.addToStore();
    }

    private addGraphic(imageUrl: string) {
        // add graphic to actor object
        const spriteSheet = spriteSheetLocation(imageUrl);
        this.spriteObject = createSpriteObject({
            height: 500,
            width: 500,
            image: spriteSheet,
        });
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
