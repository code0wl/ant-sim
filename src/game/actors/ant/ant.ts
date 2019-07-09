import { Animal } from "common/animal";
import { Sprite } from "common/model";
import { antType } from "./model";
import { Point } from "engine/modules/draw/point";
import { addGraphic } from "common/util/animation-loader";
import {
    generateRandomInteger,
    boundedCell,
    travelToPoint,
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
        this.speed = this.hasFood ? 10 : 20;

        if (this.isMoving && !this.hasFood) {
            if (this.hasScent && this.food && this.food.radius) {
                this.coordinates = travelToPoint(
                    this.coordinates,
                    this.food.coordinates,
                    this.speed
                );
            } else {
                this.hasScent = false;
                this.food = null;
                this.coordinates = this.generateRandomCoordinates(
                    new Point(this.coordinates.x, this.coordinates.y),
                    this.speed
                );
            }
        }

        if (this.hasFood) {
            this.coordinates = travelToPoint(
                this.coordinates,
                this.nestCoordinates,
                this.speed
            );
        }
    }

    private generateRandomCoordinates(coordinates: Point, speed: number) {
        return new Point(
            boundedCell(
                generateRandomInteger(
                    coordinates.x - speed,
                    coordinates.x + speed
                ),
                coordinates
            ),
            boundedCell(
                generateRandomInteger(
                    coordinates.y - speed,
                    coordinates.y + speed
                ),
                coordinates
            )
        );
    }

    public deliverFood() {
        this.hasFood = false;
        foodStores[antType[this.type]]++;
    }

    private assignAnimation(type: antType) {
        const kind = !type ? 1 : 2;
        return {
            idle: `ants/spritesheets/ant${kind}/_ant_idle-small.png`,
            walk: `ants/spritesheets/ant${kind}/_ant_walk-small.png`,
            dead: `ants/spritesheets/ant${kind}/_ant_dead-small.png`,
        };
    }
}
