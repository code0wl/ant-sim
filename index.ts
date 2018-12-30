import { Ant } from "actors/ant/ant.class";
import { Game } from "game/game";

const game = new Game(window.innerWidth, window.innerHeight, 100);

new Ant(game);
