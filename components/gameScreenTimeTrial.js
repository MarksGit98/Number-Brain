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
  levelSelector,
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
  GAMEOVER_SCREEN,
  SWITCH_SCREEN,
  SET_SCORE,
  TIMETRIAL_EASY,
  TIMETRIAL_MEDIUM,
  TIMETRIAL_HARD,
} from "../constants/constants";
import { Symbols } from "./mini-components/symbols";
import { Tiles } from "./mini-components/tiles";
import { ReverseTurn } from "./mini-components/reverseTurn";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { BackButton } from "./mini-components/backbutton";
import { Timer } from "./mini-components/timer";
import { GenerateSinglePuzzle } from "../scripts/puzzlegenerator";
export const GameScreenTimeTrial = () => {
  const dispatch = useDispatch();
  const score = useSelector(scoreSelector);
  const currentGameMode = useSelector(gameModeSelector);
  const currentDifficulty = useSelector(difficultySelector);
  const [seconds, setSeconds] = useState(TIMETRIAL_HARD);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
  const bigNumber = useSelector(bigNumberSelector);
  const setSettings = async () => {
    dispatch({ type: SET_SCORE, payload: 0 });
    const gameMode = await _retrieveData(LOCAL_GAMEMODE);
    gameMode !== null
      ? dispatch({ type: SELECT_GAMEMODE, payload: gameMode })
      : dispatch({ type: SELECT_GAMEMODE, payload: CLASSIC });
    const difficulty = await _retrieveData(LOCAL_DIFFICULTY);
    difficulty !== null ? loadDifficulty(difficulty) : loadDifficulty(EASY);
  };

  const loadDifficulty = (difficulty) => {
    dispatch({ type: SELECT_DIFFICULTY, payload: difficulty });
    setLocalStorageLoaded(true);
  };

  useEffect(() => {
    setSettings();
  }, []);

  useEffect(() => {
    if (seconds > 0 && localStorageLoaded) {
      currentDifficulty === EASY
        ? setCurrentPuzzle(
            GenerateSinglePuzzle(currentDifficulty, EASY_MIN, EASY_MAX)
          )
        : currentDifficulty === MEDIUM
        ? setCurrentPuzzle(
            GenerateSinglePuzzle(currentDifficulty, MEDIUM_MIN, MEDIUM_MAX)
          )
        : currentDifficulty === HARD
        ? setCurrentPuzzle(
            GenerateSinglePuzzle(currentDifficulty, HARD_MIN, HARD_MAX)
          )
        : null;
    }
  }, [localStorageLoaded, score]);

  useEffect(() => {
    if (localStorageLoaded && currentPuzzle !== null) {
      dispatch({
        type: LOAD_PUZZLE,
        payload: currentPuzzle,
      });
    }
  }, [currentPuzzle]);

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      dispatch({ type: SWITCH_SCREEN, payload: GAMEOVER_SCREEN });
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <SafeAreaView style={styles.mainView}>
      <BackButton />
      <View>
        <Text style={styles.smallWhiteText}>GameMode: {currentGameMode}</Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>Score: {score}</Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>
          {seconds > 0 ? seconds : "TIME'S UP"}
        </Text>
      </View>
      <View style={[styles.bigTile, styles.UnselectedTile]}>
        <Text style={styles.bigNumber}>{bigNumber}</Text>
      </View>
      <Tiles />
      <Symbols />
      <ReverseTurn />
    </SafeAreaView>
  );
};
