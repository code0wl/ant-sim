import { Texture } from "excalibur";

// implement strategy pattern to create these assets
export default {
    blackAnt: {
        walk: new Texture("spritesheets/__black_ant_walk.png"),
        idle: new Texture("spritesheets/__black_ant_idle.png"),
        die: new Texture("spritesheets/__black_ant_dead.png"),
    },
    redAnt: {
        walk: new Texture("spritesheets/__red_ant_walk.png"),
        idle: new Texture("spritesheets/__red_ant_idle.png"),
        die: new Texture("spritesheets/__red_ant_dead.png"),
    },
};
