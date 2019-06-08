import { IAnt } from "game/actors/ant/model";
import { Animal } from "common/animal";
import { spiderType, ISpider } from "game/actors/spider/model";
import { Point } from "engine/modules/draw/point";
import { Sprite } from "common/model";
import { addGraphic } from "common/util/animation-loader";

export class Spider extends Animal implements ISpider {
    public attackers: IAnt[];
    public graphics: Sprite[];
    public width = !this.type ? 300 : 900;
    public height = !this.type ? 50 : 150;
    public speed = !this.type ? 5 : 10;

    constructor(type: spiderType, public coordinates: Point) {
        super(type);
        setInterval(() => this.move(), 15);
        setInterval(() => this.idle(), 1000);
        this.graphics = addGraphic(this.assignAnimation(type));
    }

    private assignAnimation(type: spiderType) {
        const kind = type ? 1 : 2;
        return {
            idle: `spiders/spider${kind}/spritesheets/sheet_spider_idle-small.png`,
            walk: `spiders/spider${kind}/spritesheets/sheet_spider_walk-small.png`,
        };
    }
    carry() {}
}
