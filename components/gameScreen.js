import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import {
  bigNumberSelector,
  levelSelector,
  difficultySelector,
  gameModeSelector,
  scoreSelector,
  blitzGameModeSelector,
  timeTrialGameModeSelector,
  volumeSelector,
  errorOccurredSelector,
} from "./selectors/stateSelectors";
import {
  INITIALIZE_ROUND,
  CLASSIC,
  LIMITED,
  TIMETRIAL,
  BLITZ,
  EASY,
  MEDIUM,
  HARD,
  LOAD_PUZZLE,
  EASY_MIN,
  EASY_MAX,
  MEDIUM_MIN,
  MEDIUM_MAX,
  HARD_MIN,
  HARD_MAX,
  BLITZ_MEDIUM,
  GAME_SCREEN,
  GAMEOVER_SCREEN,
  SWITCH_SCREEN,
  SET_SCORE,
  INFINITE,
  PUZZLE_SOLVE,
  ERROR_CLICK,
  INVALID_OPERATION_SOUND_PLAYED,
} from "../constants/constants";
import { Symbols } from "./mini-components/symbols";
import { Tiles } from "./mini-components/tiles";
import { ReverseTurn } from "./mini-components/reverseTurn";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { GenerateSinglePuzzle } from "../scripts/puzzlegenerator";
import { playSound } from "../constants/buttonClick";
import { HintButton } from "./mini-components/hintButton";
import { ResetButton } from "./mini-components/resetButton";
import { TopButtonWheelComponent } from "./mini-components/topButtonWheelComponent";
import { BannerAd } from "./ads/bannerAd";
import { BigTile } from "./mini-components/bigTile";
export const GameScreen = () => {
  const dispatch = useDispatch();
  const score = useSelector(scoreSelector);
  const currentGameMode = useSelector(gameModeSelector);
  const currentBlitzGameMode = useSelector(blitzGameModeSelector);
  const currentTimeTrialGameMode = useSelector(timeTrialGameModeSelector);
  const currentDifficulty = useSelector(difficultySelector);
  const errorOccurred = useSelector(errorOccurredSelector);
  const [seconds, setSeconds] = useState(BLITZ_MEDIUM);
  const currentLevel = useSelector(levelSelector);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
  const [solvedFirstPuzzle, setSolvedFirstPuzzle] = useState(false);
  const [prelimLoad, setPrelimLoad] = useState(false);
  const [countdownToInterstitial, setCountdownToInterstitial] = useState(0);
  const bigNumber = useSelector(bigNumberSelector);
  const volume = useSelector(volumeSelector);
  const setSettings = async () => {
    dispatch({
      type: SET_SCORE,
      payload: 0,
    });
    setLocalStorageLoaded(true);
  };

  useEffect(() => {
    if (currentGameMode === BLITZ && currentBlitzGameMode !== null)
      setSeconds(currentBlitzGameMode);
    else if (currentGameMode === TIMETRIAL && currentTimeTrialGameMode !== null)
      setSeconds(currentTimeTrialGameMode);
  }, [currentBlitzGameMode, currentTimeTrialGameMode]);

  useEffect(() => {
    setSettings();
  }, []);

  useEffect(() => {
    if (errorOccurred) if (volume) playSound(ERROR_CLICK);
    dispatch({
      type: INVALID_OPERATION_SOUND_PLAYED,
    });
  }, [errorOccurred]);

  useEffect(() => {
    if (currentGameMode !== CLASSIC && currentGameMode !== LIMITED) {
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
        currentGameMode === BLITZ ? setSeconds(currentBlitzGameMode) : null;
      }
    }
  }, [localStorageLoaded, score]);
  useEffect(() => {
    if (currentGameMode === CLASSIC || currentGameMode === LIMITED) {
      if (localStorageLoaded) {
        dispatch({
          type: INITIALIZE_ROUND,
        });
        if (prelimLoad) {
          setSolvedFirstPuzzle(true);
        }
        setPrelimLoad(true);
      }
      try {
        if (solvedFirstPuzzle && volume) {
          playSound(PUZZLE_SOLVE);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      if (localStorageLoaded && currentPuzzle !== null) {
        dispatch({
          type: LOAD_PUZZLE,
          payload: currentPuzzle,
        });
        if (prelimLoad) {
          setSolvedFirstPuzzle(true);
        }
        setPrelimLoad(true);
      }
      try {
        if (solvedFirstPuzzle && volume) {
          playSound(PUZZLE_SOLVE);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [localStorageLoaded, currentPuzzle, currentLevel]);

  useEffect(() => {
    let interval = null;
    if (currentGameMode === TIMETRIAL || currentGameMode === BLITZ) {
      if (seconds > 0) {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
        }, 1000);
      } else {
        dispatch({
          type: SWITCH_SCREEN,
          payload: GAMEOVER_SCREEN,
        });
      }
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <SafeAreaView style={styles.mainView}>
      <TopButtonWheelComponent />
      <View style={styles.gameScreenCenteredContent}>
        {currentGameMode === BLITZ || currentGameMode === TIMETRIAL ? (
          <Text style={styles.titleTextXS}>
            {seconds > 0 ? seconds : "TIME'S UP"}
          </Text>
        ) : null}
        <BigTile />
        <View style={styles.margin}>
          <Tiles />
          <Symbols />
        </View>
        <View style={[styles.row, styles.gameScreenButtonWheels]}>
          <ResetButton />
          <ReverseTurn />
          <HintButton />
        </View>
      </View>
      <View style={styles.bottomAdBanner}>
        <BannerAd />
      </View>
    </SafeAreaView>
  );
};
