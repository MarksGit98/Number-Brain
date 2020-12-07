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
} from "../constants/constants";

import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { BackButton } from "./mini-components/backbutton";
import { MainMenuButton } from "./mini-components/mainMenuButton";
import { PlayButton } from "./mini-components/playButton";
export const GameOver = () => {
  const dispatch = useDispatch();
  const score = useSelector(scoreSelector);
  const currentGameMode = useSelector(gameModeSelector);
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
    const highScore = await _retrieveData(
      `${gameMode}_${difficulty}_HIGH_SCORE`
    );
    setHighScore(highScore !== null ? highScore : 0);
    setLocalStorageLoaded(true);
  };

  useEffect(() => {
    setSettings();
  }, []);

  const handleNewHighScore = (setter) => {
    setCongrats(setter);
    if (setter) {
      _storeData(`${currentGameMode}_${currentDifficulty}_HIGH_SCORE`, score);
      setHighScore(score);
    }
  };

  useEffect(() => {
    console.log(score);
    console.log(highScore);
    score > highScore ? handleNewHighScore(true) : handleNewHighScore(false);
  }, [localStorageLoaded]);

  return (
    <SafeAreaView style={styles.mainView}>
      <BackButton />
      <View>
        <Text style={styles.smallWhiteText}>GameMode: {currentGameMode}</Text>
      </View>
      <View>
        <View>
          <Text style={styles.smallWhiteText}>
            Difficulty: {currentDifficulty}
          </Text>
        </View>
        <View></View>
        <Text style={styles.smallWhiteText}>High Score: {highScore}</Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>Score: {score}</Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>
          {congrats ? "NEW HIGH SCORE!" : "test"}
        </Text>
      </View>
      <PlayButton again={true} />
      <MainMenuButton />
    </SafeAreaView>
  );
};
