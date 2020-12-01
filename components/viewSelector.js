import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MAIN_MENU,
  LEVEL_SCREEN,
  GAME_SCREEN,
  GAMEMODE_SCREEN,
  CLASSIC,
  LIMITED,
  BLITZ,
  TIMETRIAL,
  LOCAL_GAMEMODE,
  SELECT_GAMEMODE,
} from "../constants/constants";
import { gameModeSelector, screenSelector } from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { MainMenu } from "./mainMenu";
import { LevelSelector } from "./levelSelector";
import { GameScreen } from "./gameScreen";
import { GameScreenBlitz } from "./gameScreenBlitz";
import { GameModeSelect } from "./gameModeSelect";

export const ViewSelector = () => {
  const dispatch = useDispatch();
  const view = useSelector(screenSelector);
  const gameMode = useSelector(gameModeSelector);
  const setSettings = async () => {
    const gameMode = await _retrieveData(LOCAL_GAMEMODE);
    gameMode !== null
      ? dispatch({ type: SELECT_GAMEMODE, payload: gameMode })
      : dispatch({ type: SELECT_GAMEMODE, payload: CLASSIC });
  };

  useEffect(() => {
    setSettings();
  }, []);

  return view === MAIN_MENU ? (
    <MainMenu />
  ) : view === LEVEL_SCREEN ? (
    <LevelSelector />
  ) : view === GAME_SCREEN && gameMode === CLASSIC ? (
    <GameScreen />
  ) : view === GAME_SCREEN && gameMode === LIMITED ? (
    <GameScreen />
  ) : view === GAME_SCREEN && gameMode === BLITZ ? (
    <GameScreenBlitz />
  ) : view === GAME_SCREEN && gameMode === TIMETRIAL ? (
    <GameScreen />
  ) : view === GAMEMODE_SCREEN ? (
    <GameModeSelect />
  ) : null;
};
