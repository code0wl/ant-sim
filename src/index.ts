import { Game } from "game/game";

export interface IGameConfig {
    startPopulation: number;
    foodAmount: number;
    fps: number;
}

const gameConfig = {
    startPopulation: 5,
    foodAmount: 5,
    fps: 60,
};

export const game = new Game(gameConfig);
