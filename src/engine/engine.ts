import { Draw } from 'engine/modules/draw/draw';
import { currentResolution } from 'game/common/util/center';
import { AnimationLoop } from 'engine/modules/animation/animation';

export class Engine {
    public draw: Draw;
    public animationLoop: AnimationLoop;

    constructor() {
        this.draw = new Draw(currentResolution);
        this.start();
    }

    public start() {
        this.animationLoop = new AnimationLoop(
			super.getContext(), super.getCanvas().width, super.getCanvas().height, this.logger,
			this.engine);
    }

    public stop() {

    }
    
    public log() {

    }

    public pause() {

    }

}

export const engine = new Engine();