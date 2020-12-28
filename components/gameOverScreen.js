import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  ColorPropType,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import {
  bigNumberSelector,
  wonSelector,
  difficultySelector,
  gameModeSelector,
  scoreSelector,
  blitzGameModeSelector,
  timeTrialGameModeSelector,
} from "./selectors/stateSelectors";
import {
  INITIALIZE_ROUND,
  PREVIOUS_SCREEN,
  LOCAL_DIFFICULTY,
  LOCAL_LEVEL,
  SELECT_LEVEL,
  SELECT_DIFFICULTY,
  CLASSIC,
  LIMITED,
  TIMETRIAL,
  BLITZ,
  LOCAL_GAMEMODE,
  EASY,
  MEDIUM,
  HARD,
  SELECT_GAMEMODE,
  LOAD_PUZZLE,
  EASY_MIN,
  EASY_MAX,
  MEDIUM_MIN,
  MEDIUM_MAX,
  HARD_MIN,
  HARD_MAX,
  BLITZ_30,
  BLITZ_60,
  BLITZ_90,
  LOCAL_BLITZ_GAMEMODE,
  LOCAL_TIMETRIAL_GAMEMODE,
  SELECT_SUBGAMEMODE,
} from "../constants/constants";

import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { MainMenuButton } from "./mini-components/mainMenuButton";
import { PlayButton } from "./mini-components/playButton";
export const GameOver = () => {
  const dispatch = useDispatch();
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
    setSettings();
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
      score > highScore ? handleNewHighScore(true) : handleNewHighScore(false);
    }
  }, [localStorageLoaded]);

  return (
    <SafeAreaView style={styles.mainView}>
      <View>
        <Text style={styles.smallWhiteText}>GameMode: {currentGameMode}</Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>
          Difficulty: {currentDifficulty}
        </Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>
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
        <Text style={styles.smallWhiteText}>High Score: {highScore}</Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>Score: {score}</Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>
          {congrats ? "NEW HIGH SCORE!" : null}
        </Text>
      </View>
      <PlayButton again={true} />
      <MainMenuButton />
    </SafeAreaView>
  );
};
