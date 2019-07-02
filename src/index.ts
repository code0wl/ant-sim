import { Game } from "game/game";

export interface IGameConfig {
    startPopulation: number;
    foodAmount: number;
    fps: number;
}

const gameConfig = {
    startPopulation: 4,
    foodAmount: 20,
    fps: 30,
};

export const game = new Game(gameConfig);
