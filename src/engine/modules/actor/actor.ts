import { actorStore } from "engine/modules/actor/store";
import {
    spriteSheetLocation,
    createSpriteObject,
} from "common/util/animation-loader";
import { game } from "../../../index";

export class Actor {
    constructor(imageUrl: string) {
        this.addGraphic(imageUrl);
        this.addToStore();
    }

    private addGraphic(imageUrl: string) {
        // add graphic to actor object
        console.log(game);
        const spriteSheet = spriteSheetLocation(imageUrl);
        const spriteObject = createSpriteObject({
            context: game.draw.getContext(),
            height: 300,
            width: 300,
            image: spriteSheet,
        });

        const { context, height, width, image } = spriteObject;

        context.drawImage(image, 0, 0, width, height, 0, 0, width, height);
    }

    public destroy(id: number) {
        actorStore.forEach(actor => {
            if (actor.id === id) {
                actorStore.delete(actor);
            }
        });
    }

    public update() {
        // redraw
    }

    private addToStore() {
        this.id = actorStore.size;
        actorStore.add(this);
    }
}
