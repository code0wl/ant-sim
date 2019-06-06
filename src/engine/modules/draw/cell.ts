export class Cell {
    constructor(public start: number, public end: number) {}

    public hasItem(): Boolean {
        return false;
    }
}
