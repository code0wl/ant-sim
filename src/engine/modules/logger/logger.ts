import { AnimationLoop } from "engine/modules/animation/animation";

declare const console: any;

export class Logger {

	private color: string;
	private lagTime: number;

	constructor(private animation: AnimationLoop) {
		this.lagTime = animation.lagTime;
		this.generateUI();
	}

	public logStats(): void {
		this.color = this.lagTime > 10 ? "red" : "green";
		console.log(this.color, "test");
	}

	private generateUI(): void {
		const ui = document.createElement("div");
		ui.classList.add("render-info");
		ui.style.zIndex = "1";
		ui.style.position = "absolute";
		ui.style.top = "0";
		ui.style.width = `370px`;
		ui.style.right = "0";
		document.body.appendChild(ui);
	}

}