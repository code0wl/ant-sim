import { Animal } from "common/animal";
import { spiderType } from "game/actors/spider/model";
import { Point } from "engine/modules/draw/point";
import { Sprite } from "common/model";
import { addGraphic } from "common/util/animation-loader";
import { Ant } from "../ant/ant";
import { generateRandomCoordinates } from "common/util/movement.utils";

export class Spider extends Animal {
    public attackers: Ant[];
    public graphics: Sprite[];
    public width = !this.type ? 300 : 900;
    public height = !this.type ? 50 : 150;
    public speed = !this.type ? 5 : 10;

    constructor(type: spiderType, public coordinates: Point) {
        super(type);
        setInterval(() => this.move(), 2000);
        setInterval(() => this.idle(), 4000);
        this.graphics = addGraphic(this.assignAnimation(type));
    }

    public updateActor() {
        if (this.isMoving) {
            this.coordinates = generateRandomCoordinates(
                new Point(this.coordinates.x, this.coordinates.y)
            );
        }
    }

    private assignAnimation(type: spiderType) {
        const kind = type ? 1 : 2;
        return {
            idle: `spiders/spider${kind}/spritesheets/sheet_spider_idle-small.png`,
            walk: `spiders/spider${kind}/spritesheets/sheet_spider_walk-small.png`,
        };
    }
}
