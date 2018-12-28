export interface IAnimal {
    move(x: number, y: number): void;
    eat(): void;
    isAlive: boolean;
    isMoving(): boolean;
}
