import {
  PREVIOUS_SCREEN,
  SWITCH_SCREEN,
  TOGGLE_MUSIC,
  TOGGLE_VOLUME,
  LOCAL_VOLUME,
  LOCAL_MUSIC,
  GAME_SCREEN,
} from "../constants/constants";
import { initialState } from "./initialSettingsState";
import { _storeData } from "../localStorage/storeData";

export const userSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SCREEN: {
      return {
        ...state,
        previousScreens: [...state.previousScreens, action.payload],
        currentScreen: action.payload,
      };
    }
    case PREVIOUS_SCREEN: {
      return {
        ...state,
        previousScreens: action.payload,
      };
    }
    case TOGGLE_MUSIC: {
      _storeData(`${LOCAL_MUSIC}`, (!state.music).toString());
      return {
        ...state,
        music: !state.music,
      };
    }
    case TOGGLE_VOLUME: {
      _storeData(`${LOCAL_VOLUME}`, (!state.volume).toString());
      return {
        ...state,
        volume: !state.volume,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
