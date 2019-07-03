import { Ant } from "game/actors/ant/ant";

export const fightWinner = (...ants: Ant[]) => {
    return ants[Math.floor(Math.random() * ants.length)];
};
