export class Cell {
    constructor(public start: number, public end: number) {}

    public getActor() {
        return this;
    }

    public removeActor() {
        return this;
    }
}
