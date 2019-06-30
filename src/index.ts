import { Game } from "game/game";

export interface IGameConfig {
    startPopulation: number;
}

const gameConfig = {
    resolution: {},
    startPopulation: 4,
};

export const game = new Game(gameConfig);
