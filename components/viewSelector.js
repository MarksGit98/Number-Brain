import React from "react";
import { useSelector } from "react-redux";
import {
  MAIN_MENU,
  LEVEL_SCREEN,
  GAME_SCREEN,
  GAMEMODE_SCREEN,
  GAMEOVER_SCREEN,
} from "../constants/constants";
import { screenSelector } from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { MainMenu } from "./mainMenu";
import { LevelSelector } from "./levelSelector";
import { GameScreen } from "./gameScreen";
import { GameModeSelect } from "./gameModeSelect";
import { GameOver } from "./gameOverScreen";

export const ViewSelector = () => {
  const view = useSelector(screenSelector);

  return view === MAIN_MENU ? (
    <MainMenu />
  ) : view === LEVEL_SCREEN ? (
    <LevelSelector />
  ) : view === GAME_SCREEN ? (
    <GameScreen />
  ) : view === GAMEMODE_SCREEN ? (
    <GameModeSelect />
  ) : view === GAMEOVER_SCREEN ? (
    <GameOver />
  ) : null;
};
