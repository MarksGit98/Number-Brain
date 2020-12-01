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
} from "../constants/constants";
import { Symbols } from "./mini-components/symbols";
import { Tiles } from "./mini-components/tiles";
import { ReverseTurn } from "./mini-components/reverseTurn";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { BackButton } from "./mini-components/backbutton";
import { Timer } from "./mini-components/timer";
import { GenerateSinglePuzzle } from "../scripts/puzzlegenerator";
export const GameScreenBlitz = () => {
  console.log(GenerateSinglePuzzle(HARD, 1, 150));
  const dispatch = useDispatch();
  const currentLevel = useSelector(levelSelector);
  const currentGameMode = useSelector(gameModeSelector);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(true);
  const initializePuzzle = async () => {
    //Load randomly generated puzzle here
  };

  useEffect(() => {
    setSettings();
  }, []);

  const loadLevel = (level) => {
    dispatch({ type: SELECT_LEVEL, payload: level });
    setLocalStorageLoaded(true);
  };

  useEffect(() => {
    if (localStorageLoaded) {
      dispatch({
        type: INITIALIZE_ROUND,
      });
    }
  }, [localStorageLoaded, currentLevel]);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const bigNumber = useSelector(bigNumberSelector);
  const won = useSelector(wonSelector);
  return (
    <SafeAreaView style={styles.mainView}>
      <BackButton />
      <View>
        <Text style={styles.smallWhiteText}>GameMode: {currentGameMode}</Text>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>Level {currentLevel}</Text>
      </View>
      <Text style={styles.smallWhiteText}>
        {seconds > 0 ? seconds : "TIME'S UP"}
      </Text>
      <View style={[styles.bigTile, styles.UnselectedTile]}>
        <Text style={styles.bigNumber}>{bigNumber}</Text>
      </View>

      <View>
        <Text style={styles.bigNumber}>{won === true ? "WON" : ""}</Text>
      </View>
      <Tiles />
      <Symbols />
      <ReverseTurn />
    </SafeAreaView>
  );
};
