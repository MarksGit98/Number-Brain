import React from "react";
import { useSelector } from "react-redux";
import { MAIN_MENU, LEVEL_SCREEN, GAME_SCREEN, GAMEMODE_SCREEN } from "../constants/constants";
import { screenSelector } from "./selectors/stateSelectors";
import { MainMenu } from "./mainMenu";
import { LevelSelector } from "./levelSelector";
import { GameScreen } from "./gameScreen";
import {GameModeSelect} from "./gameModeSelect"
export const ViewSelector = () => {
  const view = useSelector(screenSelector);
  return view === MAIN_MENU ? (
    <MainMenu />
  ) : view === LEVEL_SCREEN ? (
    <LevelSelector />
  ) : view === GAME_SCREEN ? (
    <GameScreen />
  ) : view === GAMEMODE_SCREEN ? 
  <GamdeModeSelect/>: null;
};
