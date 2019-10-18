export class AnimationLoop {
    public width: number;
    public height: number;

    private previousTimestamp = 0;
    private timestep = 1000 / this.fps;

    constructor(private fps: number) {
        this.startAnimation();
    }

    public startAnimation(timestamp?: number) {
        requestAnimationFrame(timestamp => this.startAnimation(timestamp));
        if (timestamp - this.previousTimestamp < this.timestep) return;
        this.previousTimestamp = timestamp;
        this.update();
    }
}
