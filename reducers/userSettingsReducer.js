import {
  PREVIOUS_SCREEN,
  SWITCH_SCREEN,
  TOGGLE_MUSIC,
  TOGGLE_VOLUME
} from "../constants/constants";
import { initialState } from "./initialSettingsState";

export const userSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREVIOUS_SCREEN: {
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: action.payload,
      };
    }
    case SWITCH_SCREEN: {
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: action.payload,
      };
    }
    case TOGGLE_MUSIC: {
      return {
        ...state,
        music: !state.music
      }
    }
    case TOGGLE_VOLUME: {
      return {
        ...state,
        volume: !state.volume
      }
    }
    default:
      return state;
  }
};
