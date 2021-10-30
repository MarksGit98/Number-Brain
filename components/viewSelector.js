import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MAIN_MENU,
  LEVEL_SCREEN,
  GAME_SCREEN,
  GAMEMODE_SCREEN,
  GAMEOVER_SCREEN,
  PREMIUM,
  TOGGLE_PREMIUM,
  PREMIUM_SCREEN,
} from "../constants/constants";
import {
  screenSelector,
  musicSelector,
  premiumStatusSelector,
} from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { MainMenu } from "./mainMenu";
import { LevelSelector } from "./levelSelector";
import { GameScreen } from "./gameScreen";
import { GameModeSelect } from "./gameModeSelect";
import { GameOver } from "./gameOverScreen";
import { Audio } from "expo-av";
import { MusicButton } from "./mini-components/musicButton";
import { useFonts } from "expo-font";
import { PremiumScreen } from "./premiumScreen";
export const ViewSelector = () => {
  const dispatch = useDispatch();
  const view = useSelector(screenSelector);
  const [backgroundMusic, setBackgroundMusic] = useState();
  const music = useSelector(musicSelector);
  const playBackgroundMusic = async () => {
    const bgMusic = new Audio.Sound();
    await bgMusic.loadAsync(require("../assets/bgmusic.mp3"));
    await bgMusic.setStatusAsync({ isLooping: true });
    await bgMusic.playAsync();
    setBackgroundMusic(bgMusic);
  };
  const [fontsLoaded] = useFonts({
    digital: require("../fonts/joystix-monospace.ttf"),
  });

  useEffect(() => {
    try {
      music ? playBackgroundMusic() : null;
    } catch (err) {
      console.log(err);
    }
  }, [music]);

  const setPremiumStatus = async () => {
    let premium = await _retrieveData(PREMIUM);
    premium === "false" || premium === undefined || premium === null
      ? (premium = false)
      : (premium = true);
    dispatch({
      type: TOGGLE_PREMIUM,
      payload: premium,
    });
  };

  useEffect(() => {
    setPremiumStatus();
  });
  useEffect(() => {
    try {
      if (!music && backgroundMusic) backgroundMusic.unloadAsync();
      return backgroundMusic
        ? () => {
            backgroundMusic.unloadAsync();
          }
        : undefined;
    } catch (e) {
      console.log(e);
    }
  }, [backgroundMusic, music]);

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
  ) : view === PREMIUM_SCREEN ? (
    <PremiumScreen />
  ) : (
    <MainMenu />
  );
};
