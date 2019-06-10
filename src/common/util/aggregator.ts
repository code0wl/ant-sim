import { actorStore } from "engine/modules/actor/store";
import { Actor } from "engine/modules/actor/actor";

export const getActorsOfKind = (kind: string, type: number) =>
    Array.from(actorStore).filter(
        (actor: Actor) =>
            actor.constructor.name.toLowerCase() === kind && actor.type === type
    );
