import { Animal } from "common/animal";
import { Sprite, IAnimationType } from "common/model";
import { antType } from "./model";
import { Point } from "engine/modules/draw/point";
import { addGraphic } from "common/util/animation-loader";
import {
    travelToPoint,
    generateRandomCoordinates,
    toRadians,
    getOrientation,
} from "common/util/movement.utils";
import { Food } from "../food/food";
import { foodStores } from "engine/modules/actor/store";

export class Ant extends Animal {
    public readonly width = 80;
    public readonly height = 27;
    public readonly graphics: Sprite[];
    public hasScent = false;
    public speed: number;
    public food: Food;

    constructor(public type: antType, private nestCoordinates: Point) {
        super(type);
        this.graphics = addGraphic(this.assignAnimation(type));
        this.coordinates = this.nestCoordinates;
    }

    public gather(food: Food) {
        if (this.hasFood) {
            return;
        }
        this.food = food;
        this.hasFood = true;
    }

    public updateActor() {
        this.speed = this.hasFood ? 2 : 1;
        const previousCoordinates = this.coordinates

        if (!this.hasFood) {
            if (this.hasScent && this.food && this.food.radius) {
                this.coordinates = travelToPoint(
                    this.coordinates,
                    this.food.coordinates,
                    this.speed
                );
            } else {
                this.hasScent = false;
                this.food = null;
                this.coordinates = generateRandomCoordinates(
                    new Point(this.coordinates.x, this.coordinates.y),
                    this.speed
                );
            }
        } else {
            this.coordinates = travelToPoint(
                this.coordinates,
                this.nestCoordinates,
                this.speed
            );
        }

        this.currentRotation = getOrientation(
            previousCoordinates,
            this.coordinates
        );
    }

    public deliverFood() {
        this.hasFood = false;
        foodStores[antType[this.type]]++;
    }

    private assignAnimation(type: antType): IAnimationType {
        const kind = !type ? 1 : 2;
        const baseUrl = `ants/spritesheets/ant${kind}`;
        return {
            idle: `${baseUrl}/_ant_idle-small.png`,
            walk: `${baseUrl}/_ant_walk-small.png`,
            dead: `${baseUrl}/_ant_dead-small.png`,
        };
    }
}
