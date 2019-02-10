import { Draw } from 'engine/modules/draw/draw';
import { currentResolution } from 'game/common/util/center';

export class Engine {
    public draw: Draw;

    constructor() {
        this.draw = new Draw(currentResolution);
    }

    start() {

    }

    stop() {

    }
    
    log() {

    }

    pause() {

    }

}

export const engine = new Engine();