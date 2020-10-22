import {
  SELECT_TILE_1,
  SELECT_TILE_2,
  SELECT_SYMBOL,
  REVERSE_TURN,
  RESET_ON_INVALID_OPERATION,
  WON_ROUND,
  PERFORM_OPERATION,
  INITIALIZE_ROUND,
} from "../constants/constants";
import { puzzles } from "../puzzles/puzzles";

const gameMode = "easy";
const currentLevel = "1";
const initialState = {
  gameMode: "easy",
  currentLevel: "1",
};

export const userSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TILE_1: {
      return {
        ...state,
        selectedTile1: {
          value: action.payload !== null ? state.tiles[action.payload] : null,
          index: action.payload !== null ? action.payload : null,
        },
      };
    }

    default:
      return state;
  }
};
