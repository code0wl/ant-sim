import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";

export const fightWinner = (...ants: Ant[]) => {
    return ants[Math.floor(Math.random() * ants.length)];
};
