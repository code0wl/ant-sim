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

        actors.map(actor =>
            canvas
                .getContext()
                .drawImage(
                    actor.graphics[actor.graphics.state].image,
                    0,
                    0,
                    actor.width,
                    actor.height,
                    0,
                    0,
                    actor.width,
                    actor.height
                )
        );
    }

    private animationLoop() {
        requestAnimationFrame(() => this.animationLoop());
        this.renderActors();
    }
}
