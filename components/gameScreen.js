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
  GAMEOVER_SCREEN,
  SWITCH_SCREEN,
  SET_SCORE,
  INFINITE,
  PUZZLE_SOLVE,
} from "../constants/constants";
import { Symbols } from "./mini-components/symbols";
import { Tiles } from "./mini-components/tiles";
import { ReverseTurn } from "./mini-components/reverseTurn";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { BackButton } from "./mini-components/backButton";
import { HomeButton } from "./mini-components/homeButton";
import { GenerateSinglePuzzle } from "../scripts/puzzlegenerator";
import { playSound } from "../constants/buttonClick";
import { MusicButton } from "./mini-components/musicButton";
import { VolumeButton } from "./mini-components/volumeButton";
import { HintButton } from "./mini-components/hintButton";
export const GameScreen = () => {
  const dispatch = useDispatch();
  const score = useSelector(scoreSelector);
  const currentGameMode = useSelector(gameModeSelector);
  const currentBlitzGameMode = useSelector(blitzGameModeSelector);
  const currentTimeTrialGameMode = useSelector(timeTrialGameModeSelector);
  const currentDifficulty = useSelector(difficultySelector);
  const [seconds, setSeconds] = useState(BLITZ_MEDIUM);
  const currentLevel = useSelector(levelSelector);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
  const [solvedFirstPuzzle, setSolvedFirstPuzzle] = useState(false);
  const [prelimLoad, setPrelimLoad] = useState(false);
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
      <View style={styles.buttonWheelContainer}>
        <View style={[styles.buttonWheelViewColumn, styles.leftColumn]}>
          <BackButton />
          <HomeButton />
        </View>
        <View style={styles.gameScreenText}>
          <View>
            <Text style={[styles.titleTextSmall, styles.gameModeBanner]}>
              {currentGameMode}
            </Text>
          </View>
          {currentGameMode !== CLASSIC && currentGameMode !== LIMITED ? (
            <View>
              <Text style={styles.titleTextXS}> Score:{score} </Text>
            </View>
          ) : null}
          <View>
            {currentGameMode === BLITZ || currentGameMode === TIMETRIAL ? (
              <Text style={styles.titleTextXS}>
                {seconds > 0 ? seconds : "TIME'S UP"}
              </Text>
            ) : currentGameMode !== INFINITE ? (
              <Text style={styles.titleTextXS}> Level {currentLevel} </Text>
            ) : null}
          </View>
        </View>
        <View style={[styles.buttonWheelViewColumn, styles.rightColumn]}>
          <MusicButton floatRight={true} />
          <VolumeButton floatRight={true} />
        </View>
      </View>
      <View style={styles.gameScreenCenteredContent}>
        <View style={[styles.bigTile, styles.unselectedTile]}>
          <Text style={[styles.titleTextXXXL, styles.center]}>{bigNumber}</Text>
        </View>
        <View style={styles.tilesAndSymbolsRows}>
          <Tiles />
          <Symbols />
        </View>
        <ReverseTurn style={styles.reverseTurnPlacement} />
        <HintButton />
      </View>
    </SafeAreaView>
  );
};
