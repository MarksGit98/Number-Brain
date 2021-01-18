import {
  TILE_TAP,
  BUTTON_CLICK,
  ERROR_CLICK,
  SYMBOL_TAP,
  PUZZLE_SOLVE,
  UNDO_TURN,
} from "./constants";
import { Audio } from "expo-av";

export const playSound = async (soundType) => {
  const sound = new Audio.Sound();
  try {
    if (soundType === TILE_TAP) {
      await sound.loadAsync(require("../assets/tileTap.mp3"));
    } else if (soundType === SYMBOL_TAP) {
      await sound.loadAsync(require("../assets/symbolTap.mp3"));
    } else if (soundType === BUTTON_CLICK) {
      await sound.loadAsync(require("../assets/buttonClick.mp3"));
    } else if (soundType === ERROR_CLICK) {
      await sound.loadAsync(require("../assets/errorClick.mp3"));
    } else if (soundType === UNDO_TURN) {
      await sound.loadAsync(require("../assets/undoTurn.mp3"));
    } else if (soundType === PUZZLE_SOLVE) {
      await sound.loadAsync(require("../assets/puzzleSolve.mp3"));
    }

    await sound.playAsync();
    setInterval(() => sound.unloadAsync(), 2000);
  } catch (e) {
    console.log(e);
  }
};
