import { Animal } from "common/animal";
import { spiderType } from "game/actors/spider/model";
import { Point } from "engine/modules/draw/point";
import { Sprite } from "common/model";
import { addGraphic } from "common/util/animation-loader";
import { Ant } from "../ant/ant";

export class Spider extends Animal {
    public attackers: Ant[];
    public graphics: Sprite[];
    public width = !this.type ? 300 : 900;
    public height = !this.type ? 50 : 150;
    public speed = !this.type ? 5 : 10;

    private randomDictionary: number[] = [1, 2, -1, -2];
    private randomX: number;
    private randomY: number;

    constructor(public type: spiderType, public coordinates: Point) {
        super(type);
        setInterval(() => this.move(), 2000);
        setInterval(() => this.idle(), 4000);
        this.graphics = addGraphic(this.assignAnimation(this.type));

        this.randomX = this.randomDictionary[
            Math.floor(Math.random() * this.randomDictionary.length)
        ];

        this.randomY = this.randomDictionary[
            Math.floor(Math.random() * this.randomDictionary.length)
        ];
    }

    public updateActor() {
        if (!this.isMoving) {
            this.randomX = this.randomDictionary[
                Math.floor(Math.random() * this.randomDictionary.length)
            ];

            this.randomY = this.randomDictionary[
                Math.floor(Math.random() * this.randomDictionary.length)
            ];
        }

        if (this.isMoving) {
            this.coordinates = new Point(
                this.coordinates.x + this.randomX,
                this.coordinates.y + this.randomY
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
