import { Point } from "common/model";
import { canvas } from "index";
import { actorStore } from "engine/modules/actor/store";

export class AnimationLoop {
    public width: number;
    public height: number;

    constructor(resolution: Point) {
        this.width = resolution.x;
        this.height = resolution.y;
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
            } = actor;

            canvas
                .getContext()
                .drawImage(
                    graphics[graphics.state].image,
                    (frameIndex * width) / numberOfFrames,
                    0,
                    width / numberOfFrames,
                    height,
                    0,
                    0,
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
