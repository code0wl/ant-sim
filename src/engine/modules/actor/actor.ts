import { actorStore } from "engine/modules/actor/store";

export class Actor {
    private id: number;
    constructor() {
        this.addGraphic();
        this.addToStore();
    }

    private addGraphic() {
        // add graphic to actor object
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
