import { Point } from "common/model";
import { canvas } from "index";
import { actorStore } from "engine/modules/actor/store";

export class AnimationLoop {
    public width: number;
    public height: number;

    constructor({ x, y }: Point) {
        this.width = x;
        this.height = y;
        this.animationLoop();
    }

    public update() {
        // implemented by Engine
    }

    public renderActors() {
        const actors = Array.from(actorStore);

        actors.forEach(actor => {
            const {
                width,
                height,
                graphics,
                frameIndex,
                numberOfFrames,
                coordinates,
                currentState
            } = actor;

            canvas
                .getContext()
                .clearRect(coordinates.x, coordinates.y, width, height);

console.log(currentState)

            canvas
                .getContext()
                .drawImage(
                    graphics[0].image,
                    (frameIndex * width) / numberOfFrames,
                    0,
                    width / numberOfFrames,
                    height,
                    coordinates.x,
                    coordinates.y,
                    width / numberOfFrames,
                    height
                );
            actor.update();
        });
    }

    private animationLoop() {
        requestAnimationFrame(() => this.animationLoop());
        this.renderActors();
    }
}
