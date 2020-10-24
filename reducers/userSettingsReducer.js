import { SELECT_DIFFICULTY, SELECT_LEVEL } from "../constants/constants";
import { initialState } from "./initialState";
export const userSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DIFFICULTY: {
      return {
        ...state,
        selectedTile1: {
          value: action.payload !== null ? state.tiles[action.payload] : null,
          index: action.payload !== null ? action.payload : null,
        },
      };
    }
    case SELECT_LEVEL: {
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
