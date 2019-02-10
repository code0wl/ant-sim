import { actorStore } from "engine/modules/actor/store";
import { spriteSheetLocation } from "common/util/animation-loader";

export class Actor {
    private id: number;
    constructor(imageUrl: string) {
        this.addGraphic(imageUrl);
        this.addToStore();
    }

    private addGraphic(imageUrl) {
        // add graphic to actor object
        const spriteSheet = spriteSheetLocation(imageUrl);
        
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
