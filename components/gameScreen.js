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
} from "./selectors/stateSelectors";
import {
  INITIALIZE_ROUND,
  PREVIOUS_SCREEN,
  LOCAL_DIFFICULTY,
  LOCAL_LEVEL,
  SELECT_LEVEL,
  SELECT_DIFFICULTY,
} from "../constants/constants";
import { Symbols } from "./symbols";
import { Tiles } from "./tiles";
import { ReverseTurn } from "./reverseTurn";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { BackButton } from "./backbutton";

export const GameScreen = () => {
  const dispatch = useDispatch();
  const currentLevel = useSelector(levelSelector);
  const gameMode = useSelector(gameModeSelector);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
  const setSettings = async () => {
    const difficulty = await _retrieveData(LOCAL_DIFFICULTY);
    difficulty !== null
      ? dispatch({ type: SELECT_DIFFICULTY, payload: difficulty })
      : dispatch({ type: SELECT_DIFFICULTY, payload: "easy" });

    const level = await _retrieveData(`${difficulty}${LOCAL_LEVEL}`);
    level !== null ? loadLevel(level) : loadLevel("1");
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

  const bigNumber = useSelector(bigNumberSelector);
  const won = useSelector(wonSelector);
  return (
    <SafeAreaView style={styles.mainView}>
      <BackButton />
      <View>
        <Text style={styles.smallWhiteText}>Level {currentLevel}</Text>
      </View>
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
