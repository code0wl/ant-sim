import { actorStore } from "engine/modules/actor/store";
import {
    spriteSheetLocation,
    createSpriteObject,
} from "common/util/animation-loader";
import { IAnimationType, currentState, IAnimalType } from "common/model";

export class Actor {
    public graphics: any;
    private id: number;

    constructor(
        public type: IAnimalType,
        animationType: IAnimationType,
        public state: currentState
    ) {
        this.addGraphic(animationType);
        this.addToStore();
    }

    private addGraphic(imageLibrary: IAnimationType) {
        // add graphic to actor object
        this.graphics = [imageLibrary]
            .reduce((prev, next) => {
                const image = spriteSheetLocation(next);
                prev.push(image);
                return prev;
            }, [])
            .map(image =>
                createSpriteObject({
                    image,
                })
            );

        this.graphics.type = this.type;
        this.graphics.id = this.id;
        this.graphics.state = this.state;
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
