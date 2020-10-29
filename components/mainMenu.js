import React, { useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import { bigNumberSelector, wonSelector } from "./selectors/stateSelectors";
import { Symbols } from "./symbols";
import { Tiles } from "./tiles";
import { BackButton } from "./reverseTurn";
import { GAME_SCREEN, SWITCH_SCREEN } from "../constants/constants";
export const MainMenu = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.playButton}>
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch({ type: SWITCH_SCREEN, payload: GAME_SCREEN })
          }
        >
          <Text style={styles.playButtonText}>PLAY</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
