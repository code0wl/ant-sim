import { actorStore } from "engine/modules/actor/store";
import { IActorType, Sprite } from "common/model";
import { Point } from "../draw/point";
import { Animal } from "common/animal";

export class Actor {
    public width: number;
    public height: number;
    public numberOfFrames = 5;
    public actorID: number;
    public isActive = true;
    public coordinates: Point;
    public graphics: Sprite[] | undefined;
    public currentRotation: number = 0;
    public frameIndex = 0;
    public currentState: number;

    private tick = 0;
    private ticksPerFrame = 1;

    constructor(public type: IActorType) {
        this.addToStore();
    }

    public update() {
        if (this instanceof Animal) {
            this.tick += 1;

            if (this.tick > this.ticksPerFrame) {
                this.tick = 0;

                if (this.frameIndex < this.numberOfFrames - 1) {
                    this.frameIndex += 1;
                } else {
                    this.frameIndex = 0;
                }
            }

            this.currentRotation += 1;

            // @ts-ignore
            this.updateActor();
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        // implemented by children instances (Food, Nest)
    }

    public animate(ctx: CanvasRenderingContext2D) {
        if (this.graphics) {
            ctx.drawImage(
                this.graphics[this.currentState].image,
                (this.frameIndex * this.width) / this.numberOfFrames,
                0,
                this.width / this.numberOfFrames,
                this.height,
                this.coordinates.x,
                this.coordinates.y,
                this.width / this.numberOfFrames,
                this.height
            );
        } else {
            this.draw(ctx);
        }
    }

    public remove() {
        this.isActive = false;
    }

    public removeFromStore(actor: Actor): void {
        actorStore.delete(actor);
    }

    private addToStore() {
        this.actorID = actorStore.size;
        actorStore.add(this);
    }
}
