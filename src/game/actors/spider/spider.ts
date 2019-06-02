import { Engine } from "engine/engine";
import { IAnt } from "game/actors/ant/model";
import { Animal } from "common/animal";
import { spiderType } from "game/actors/spider/model";
import { IAnimationType, Point } from "common/model";

export class Spider extends Animal {
    public attackers: IAnt[];
    public width = !this.type ? 300 : 900;
    public height = !this.type ? 50 : 150;

    constructor(
        public type: spiderType,
        images: IAnimationType,
        public coordinates: Point
    ) {
        super(type, images, coordinates);
        setInterval(() => this.move(), 5000);
        setInterval(() => this.idle(), 10000);
    }
}
