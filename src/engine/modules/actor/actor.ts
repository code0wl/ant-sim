import { actors } from "engine/modules/actor/collection";

export class Actor {
    constructor() {}

    public destroy() {}

    private provideID(): number {
        return actors.size;
    }

    private addGraphic() {}

    private drawActor() {}

    private addActorToCollection() {}
}
