import { Game } from "game/game";

export interface IGameConfig {
    startPopulation: number;
    foodAmount: number;
}

const gameConfig = {
    resolution: {},
    startPopulation: 4,
    foodAmount: 30,
};

export const game = new Game(gameConfig);
