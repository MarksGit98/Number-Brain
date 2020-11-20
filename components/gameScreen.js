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
  const gameLevel = useSelector(levelSelector);
  const dispatch = useDispatch();

  const bigNumber = useSelector(bigNumberSelector);
  const won = useSelector(wonSelector);
  return (
    <SafeAreaView style={styles.mainView}>
      <View styles={styles.backButtonPosition}>
        <TouchableWithoutFeedback
          onPress={() => dispatch({ type: PREVIOUS_SCREEN })}
        >
          <View>
            <Image
              style={[styles.backButton]}
              source={require("../assets/back-arrow.png")}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Text style={styles.smallWhiteText}>Level {gameLevel}</Text>
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
