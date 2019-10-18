import { Game } from "game/game";

export interface IGameConfig {
    startPopulation: number;
    foodAmount: number;
    fps: number;
}

const gameConfig = {
    startPopulation: 1,
    foodAmount: 10,
    fps: 60,
};

export const game = new Game(gameConfig);
