import {
  SELECT_DIFFICULTY,
  SELECT_LEVEL,
  MAIN_MENU,
  LEVEL_SCREEN,
  GAME_SCREEN,
  PREVIOUS_SCREEN,
  SWITCH_SCREEN,
  GAMEMODE_SCREEN
} from "../constants/constants";

import { initialState } from "./initialSettingsState";
export const userSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREVIOUS_SCREEN: {
      const prevScreen = state.previousScreen;
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: prevScreen,
      };
    }
    case SWITCH_SCREEN: {
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: action.payload,
      };
    }

    default:
      return state;
  }
};
