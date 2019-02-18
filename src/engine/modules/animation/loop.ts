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
        console.log("engine update");
    }

    public renderActors() {
        const actors = Array.from(actorStore);
        actors.map(({ spriteObject }) => {
            canvas
                .getContext()
                .drawImage(
                    spriteObject.image,
                    30,
                    30,
                    spriteObject.width,
                    spriteObject.height,
                    30,
                    30,
                    spriteObject.width,
                    spriteObject.height
                );
        });
    }

    private animationLoop() {
        requestAnimationFrame(() => this.animationLoop());
        this.update();
        this.renderActors();
    }
}
