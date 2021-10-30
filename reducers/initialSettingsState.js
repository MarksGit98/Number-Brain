import { MAIN_MENU, LEVEL_SCREEN, GAME_SCREEN } from "../constants/constants";

export const initialState = {
  currentScreen: MAIN_MENU,
  previousScreens: [MAIN_MENU],
  volume: true,
  music: true,
  premium: false,
};
