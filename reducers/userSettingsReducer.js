import { SELECT_DIFFICULTY, SELECT_LEVEL } from "../constants/constants";

const initialState = {
  mainMenu: true,
};
export const userSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_MENU: {
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
