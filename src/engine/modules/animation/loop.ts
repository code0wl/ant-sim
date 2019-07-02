import { Canvas } from "../draw/canvas";

export class AnimationLoop {
    public width: number;
    public height: number;
    public canvas: Canvas;

    private previousTimestamp = 0;
    private timestep = 1000 / this.fps;

    constructor(private fps: number) {
        this.startAnimation();
    }

    public update() {}

    public startAnimation(timestamp?: number) {
        console.log(this.timestep)
        requestAnimationFrame(timestamp => this.startAnimation(timestamp));
        if (timestamp - this.previousTimestamp < this.timestep) return;
        this.previousTimestamp = timestamp;
        this.update();
    }
}
