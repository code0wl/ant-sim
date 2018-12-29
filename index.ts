import { Ant } from "actors/ant/ant.class";
import { Game } from "game/game";

const game = new Game(window.innerWidth, window.innerHeight, "gameCanvas", 100);

const gameRef = game.gameInstance;

new Ant(gameRef);
