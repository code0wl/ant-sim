import { IAnt } from "game/actors/ant/model";
import { Animal } from "common/animal";
import { spiderType, ISpider } from "game/actors/spider/model";
import { IAnimationType } from "common/model";
import { Point } from "engine/modules/draw/point";

export class Spider extends Animal implements ISpider {
    public attackers: IAnt[];
    public width = !this.type ? 300 : 900;
    public height = !this.type ? 50 : 150;

    constructor(type: spiderType, coordinates: Point, images: IAnimationType) {
        super(type, coordinates, images);
        setInterval(() => this.move(), 15);
        setInterval(() => this.idle(), 1000);
    }
    carry() {}
}
