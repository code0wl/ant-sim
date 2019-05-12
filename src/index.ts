import { Game } from "game/game";
import { Canvas } from "engine/modules/draw/canvas";
import { currentResolution } from "common/util/center";

export const canvas = new Canvas(currentResolution);

new Game();
