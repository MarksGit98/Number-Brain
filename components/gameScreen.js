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
} from "./selectors/stateSelectors";
import {
  INITIALIZE_ROUND,
  PREVIOUS_SCREEN,
  LOCAL_DIFFICULTY,
  LOCAL_LEVEL,
} from "../constants/constants";
import { Symbols } from "./symbols";
import { Tiles } from "./tiles";
import { ReverseTurn } from "./reverseTurn";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";

export const GameScreen = () => {
  const dispatch = useDispatch();
  const [currentLevel, setCurrentLevel] = useState(undefined);
  const [currentDifficulty, setCurrentDifficulty] = useState(undefined);

  const setSettings = async () => {
    const difficulty = await _retrieveData(LOCAL_DIFFICULTY);
    difficulty !== null
      ? setCurrentDifficulty(difficulty)
      : setCurrentDifficulty("easy");

    const level = await _retrieveData(`${LOCAL_DIFFICULTY}${LOCAL_LEVEL}`);
    level !== null ? setCurrentLevel(level) : setCurrentLevel("1");

    return difficulty !== null && level !== null;
  };
  useEffect(() => {
    setSettings().then((resolution) =>
      resolution !== false
        ? dispatch({
            type: INITIALIZE_ROUND,
            payload: { difficulty: currentDifficulty, level: currentLevel },
          })
        : null
    );
  }, []);
  const bigNumber = useSelector(bigNumberSelector);
  const won = useSelector(wonSelector);
  return (
    <SafeAreaView style={styles.mainView}>
      <View styles={styles.backButtonPosition}>
        <TouchableWithoutFeedback
          onPress={() => dispatch({ type: PREVIOUS_SCREEN })}
        >
          <Image
            style={[styles.backButton]}
            source={require("../assets/back-arrow.png")}
          />
        </TouchableWithoutFeedback>
      </View>
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
