import { spiderType } from "actors/spider/model";
import { Spider } from "actors/spider/spider.class";
import { IAnimationType, Point } from "common/model";

export class SpiderFactory {
    constructor(
        private spider: Spider,
        private position: Point,
        private engine: Engine, 
        spiderType: spiderType
    ) {}

    public getAnimation(): IAnimationType[] {
        
    }
}
