import { Ant } from "actors/ant/ant.class";
import { Game } from "game/game";

console.log(cc)

const game = new Game(window.innerWidth, window.innerHeight, "gameCanvas", 100);

new Ant(window.innerWidth, window.innerHeight);
