import { Draw } from 'engine/modules/draw/draw';
import { currentResolution } from 'common/util/center';
import { AnimationLoop } from 'engine/modules/animation/animation';

export class Engine {
    public draw: Draw;
    public animationLoop: AnimationLoop;

    constructor() {
        this.draw = new Draw(currentResolution);
        this.start();
    }

    public start() {
        const {width, height} = this.draw.getCanvas();
        this.animationLoop = new AnimationLoop(
			this.draw.getContext(), width, height);
    }

    public stop() {

    }
    
    public log() {

    }

    public pause() {

    }

}

export const engine = new Engine();