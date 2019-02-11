import { actorStore } from "engine/modules/actor/store";
import {
    spriteSheetLocation,
    createSpriteObject,
} from "common/util/animation-loader";
import { canvas } from "engine/modules/draw/canvas";

export class Actor {
    private id: number;
    constructor(imageUrl: string) {
        this.addGraphic(imageUrl);
        this.addToStore();
    }

    private addGraphic(imageUrl: string) {
        // add graphic to actor object
        const spriteSheet = spriteSheetLocation(imageUrl);
        const spriteObject = createSpriteObject({
            height: 500,
            width: 500,
            image: spriteSheet,
        });

        const { height, width, image } = spriteObject;

        canvas
            .getContext()
            .drawImage(image, 30, 30, width, height, 30, 30, width, height);

        console.log("image added");
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
