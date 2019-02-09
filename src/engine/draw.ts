import { Engine, engine } from "engine/engine";
import { Canvas } from "engine/canvas";
import { AnimationLoop } from "engine/animation";

export class Draw extends Canvas {

	private logger: boolean;
	public engine: Engine;
	public animationLoop: AnimationLoop;

	public constructor(width, height, logger) {
		super(width, height);
		this.logger = logger;
		this.engine = engine;
		this.startEngine();
		console.log(`drawing engine enabled with dimension: ${width}px X ${height}px`);
	}

	public getContext(): CanvasRenderingContext2D {
		return super.getContext();
	}

	public startEngine() {
		this.animationLoop = new AnimationLoop(
			super.getContext(), super.getCanvas().width, super.getCanvas().height, this.logger,
			this.engine);
	}

	public update() {
		
	}
}