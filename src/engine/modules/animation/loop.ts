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
            } = actor;

            canvas.getContext().clearRect(100, 100, width, height);

            canvas
                .getContext()
                .drawImage(
                    graphics[graphics.state].image,
                    (frameIndex * width) / numberOfFrames,
                    0,
                    width / numberOfFrames,
                    height,
                    100,
                    100,
                    width / numberOfFrames,
                    height
                );
            actor.update();
        });
    }

    private animationLoop() {
        requestAnimationFrame(() => this.animationLoop());
        // Clear the canvas
        this.renderActors();
    }
}
