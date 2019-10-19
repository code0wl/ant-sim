import { Game } from "game/game";

export interface IGameConfig {
    startPopulation: number;
    foodAmount: number;
    fps: number;
}

export const gameConfig = {
    startPopulation: 10,
    foodAmount: 10,
    fps: 50,
};

export const game = new Game(gameConfig);
