import React, { useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import { bigNumberSelector, wonSelector, levelSelector } from "./selectors/stateSelectors";
import { INITIALIZE_ROUND, PREVIOUS_SCREEN } from "../constants/constants";
import { Symbols } from "./symbols";
import { Tiles } from "./tiles";
import { ReverseTurn } from "./reverseTurn";

export const GameScreen = () => {
  const currentLevel = useSelector(levelSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: INITIALIZE_ROUND,
    });
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
      <View><Text style={styles.smallWhiteText}>Level {currentLevel}</Text></View>
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
