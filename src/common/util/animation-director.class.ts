import { Actor, CollisionType, Vector, Animation } from "excalibur";

interface AnimationNode {
    coordinates: Vector;
    animation: Animation;
}

export class AnimationDirector extends Actor {
    private animations: AnimationNode[] = [];

    constructor() {
        super({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            collisionType: CollisionType.PreventCollision,
        });
        this.traits.length = 0;
    }

    play(animation: Animation, coordinates: Vector) {
        this.animations.push({
            animation,
            coordinates: coordinates.clone(),
        });
    }

    onPostUpdate() {
        this.animations = this.animations.filter(a => !a.animation.isDone());
    }

    onPostDraw(ctx: CanvasRenderingContext2D) {
        for (let node of this.animations) {
            node.animation.draw(
                ctx,
                node.coordinates.x - node.animation.drawWidth / 2,
                node.coordinates.y - node.animation.drawHeight / 2
            );
        }
    }
}

const animationDirector = new AnimationDirector();

export { animationDirector };
