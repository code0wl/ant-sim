import { Engine, engine } from "engine/engine";
import { Logger } from "engine/modules/logger/logger";

export class AnimationLoop {

	public width: number;
	public height: number;

	private context: CanvasRenderingContext2D;
	public engine: Engine;
	private log: boolean;
	private loggable: Logger;

	private currentTime: number;
	private elapsedTime: number;
	private previousTime: number = Date.now();
	public lagTime: number = 0;
	private fps: number = 60;
	private frameTime: number = 1 / this.fps;
	private kMPF = 1000 * this.frameTime;

	public constructor(context: CanvasRenderingContext2D, width: number, height: number) {
		this.context = context;
		this.width = width;
		this.engine = engine;
		this.height = height;
		this.createLogger();
		this.animationLoop();
	}

	private createLogger() {
		if (this.log) {
			this.loggable = new Logger(this);
		}
	}

	private updateLogger(): void {
		this.loggable.logStats();
	}

	private draw() {
		this.context.clearRect(0, 0, this.width, this.height);
	}

	private animationCost() {
		this.currentTime = Date.now();
		this.elapsedTime = this.currentTime - this.previousTime;
		this.previousTime = this.currentTime;
		this.lagTime += this.elapsedTime;

		while (this.lagTime >= this.kMPF) {
			this.lagTime -= this.kMPF;
		}
	}

	private animationLoop() {
		requestAnimationFrame(() => this.animationLoop());
		this.updateLogger();
		this.animationCost();
		this.draw();
	}

}