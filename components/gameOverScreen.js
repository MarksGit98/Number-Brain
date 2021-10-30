import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import { BannerAd } from "./ads/bannerAd";
import {
  difficultySelector,
  gameModeSelector,
  scoreSelector,
  blitzGameModeSelector,
  timeTrialGameModeSelector,
  premiumStatusSelector,
} from "./selectors/stateSelectors";
import {
  LOCAL_DIFFICULTY,
  SELECT_DIFFICULTY,
  CLASSIC,
  TIMETRIAL,
  BLITZ,
  LOCAL_GAMEMODE,
  EASY,
  SELECT_GAMEMODE,
  LOCAL_BLITZ_GAMEMODE,
  LOCAL_TIMETRIAL_GAMEMODE,
  SELECT_SUBGAMEMODE,
  BLITZ_MEDIUM,
  RESET_TILES,
} from "../constants/constants";

import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { MainMenuButton } from "./mini-components/mainMenuButton";
import { PlayButton } from "./mini-components/playButton";
import { playInterstitialAds } from "./ads/playInterstitialAds";
import { UpperScreen } from "./mini-components/upperScreen";
export const GameOver = () => {
  const dispatch = useDispatch();
  const premiumStatus = useSelector(premiumStatusSelector);
  const score = useSelector(scoreSelector);
  const currentGameMode = useSelector(gameModeSelector);
  const currentBlitzGameMode = useSelector(blitzGameModeSelector);
  const currentTimeTrialGameMode = useSelector(timeTrialGameModeSelector);
  const currentDifficulty = useSelector(difficultySelector);
  const [highScore, setHighScore] = useState(null);
  const [congrats, setCongrats] = useState(false);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
  const setSettings = async () => {
    const gameMode = await _retrieveData(LOCAL_GAMEMODE);
    gameMode !== null
      ? dispatch({ type: SELECT_GAMEMODE, payload: gameMode })
      : dispatch({ type: SELECT_GAMEMODE, payload: CLASSIC });
    const difficulty = await _retrieveData(LOCAL_DIFFICULTY);
    difficulty !== null
      ? dispatch({ type: SELECT_DIFFICULTY, payload: difficulty })
      : dispatch({ type: SELECT_DIFFICULTY, payload: EASY });
    const subGameMode =
      gameMode === BLITZ
        ? await _retrieveData(LOCAL_BLITZ_GAMEMODE)
        : gameMode === TIMETRIAL
        ? await _retrieveData(LOCAL_TIMETRIAL_GAMEMODE)
        : null;
    subGameMode !== null
      ? dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: { subGameMode: subGameMode, gameMode: gameMode },
        })
      : dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: { subGameMode: BLITZ_MEDIUM, gameMode: gameMode },
        });
    const highScore = await _retrieveData(
      `${gameMode}${difficulty}${subGameMode}HighScore`
    );
    setHighScore(highScore !== null ? highScore : 0);
  };

  useEffect(() => {
    dispatch({ type: RESET_TILES });
    setSettings();
    if (!premiumStatus) playInterstitialAds();
  }, []);

  useEffect(() => {
    if (!localStorageLoaded && highScore !== null) setLocalStorageLoaded(true);
  }, [highScore]);

  const handleNewHighScore = (setter) => {
    setCongrats(setter);
    if (setter) {
      currentGameMode === BLITZ
        ? _storeData(
            `${currentGameMode}${currentDifficulty}${currentBlitzGameMode}HighScore`,
            score
          )
        : currentGameMode === TIMETRIAL
        ? _storeData(
            `${currentGameMode}${currentDifficulty}${currentTimeTrialGameMode}HighScore`,
            score
          )
        : null;
      setHighScore(score);
    }
  };

  useEffect(() => {
    if (localStorageLoaded) {
      Number(score) > Number(highScore)
        ? handleNewHighScore(true)
        : handleNewHighScore(false);
    }
  }, [localStorageLoaded]);

  return (
    <SafeAreaView style={styles.mainView}>
      <UpperScreen />
      <View>
        <Text style={styles.titleTextSmall}>GameMode: {currentGameMode}</Text>
      </View>
      <View>
        <Text style={styles.titleTextSmall}>
          Difficulty: {currentDifficulty}
        </Text>
      </View>
      <View>
        <Text style={styles.titleTextSmall}>
          subGameMode:{" "}
          {currentGameMode === BLITZ
            ? currentBlitzGameMode
            : currentGameMode === TIMETRIAL
            ? currentTimeTrialGameMode
            : null}{" "}
          seconds
        </Text>
      </View>
      <View>
        <Text style={styles.titleTextSmall}>High Score: {highScore}</Text>
      </View>
      <View>
        <Text style={styles.titleTextSmall}>Score: {score}</Text>
      </View>
      <View>
        <Text style={styles.titleTextSmall}>
          {congrats ? "NEW HIGH SCORE!" : null}
        </Text>
      </View>
      <PlayButton again={true} />
      <MainMenuButton />
      {!premiumStatus ? (
        <View style={styles.bottomAdBanner}>
          <BannerAd />
        </View>
      ) : null}
    </SafeAreaView>
  );
};
