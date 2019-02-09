class Engine {
    constructor() {
        
    }
    public start(): void {
        this.gameLoop(60);
    }
    public pause() {}
    public stop() {}
    private gameLoop(fps: number) {}
}
