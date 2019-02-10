import { Point } from "game/common/model";

export class Canvas {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;

	constructor({x, y}: Point) {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.canvas.width = x;
		this.canvas.height = y;
		this.canvas.classList.add("physics-canvas");
		document.body.appendChild(this.canvas);
	}

	public getCanvas(): HTMLCanvasElement {
		return this.canvas;
	}

	public getContext(): CanvasRenderingContext2D {
		return this.context;
	}

}