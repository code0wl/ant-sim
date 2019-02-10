import { IAnimal, Point } from "common/model";
import { Actor } from "engine/modules/actor/actor";

export class Animal extends Actor {
    constructor() {
        super();
        console.log(this);
    }
}
