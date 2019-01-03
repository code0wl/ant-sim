import { IAnimationType } from "common/model";
import { Actor } from "excalibur";

// make into util
export const animationLoader = (
    animationArray: IAnimationType[],
    ActorInstance: Actor
) =>
    animationArray.map(animation =>
        Object.entries(animation).map(animationName => {
            const [name, animation] = animationName;
            ActorInstance.addDrawing(name, animation);
        })
    );
