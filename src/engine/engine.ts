import { EngineOptions } from 'game/model';

export class Engine {
    public draw: Draw;
    private mouse: InputMouse;

    public constructor(options: EngineOptions) {
        this.draw = new Draw(options.width, options.height, options.log, this);
        this.bootstrapEngine(options);
    }

    private bootstrapEngine(options: EngineOptions): void {
        this.enableMouse(options.mouse);
    }

    private enableMouse(isEnabled: boolean): void {
            this.mouse = new InputMouse();
            this.mouse.mouseInput$.subscribe();
    }

}

export const engine = new Engine();