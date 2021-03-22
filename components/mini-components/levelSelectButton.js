import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SELECT_GAMEMODE,
  GAME_SCREEN,
  SWITCH_SCREEN,
  LEVEL_SCREEN,
  BUTTON_CLICK,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";
export const LevelSelectButton = () => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);
  const handleButtonClick = () => {
    if (volume) playSound(BUTTON_CLICK);
    dispatch({ type: SWITCH_SCREEN, payload: LEVEL_SCREEN });
  };

  return (
    <View style={[styles.bigButton, { backgroundColor: "red" }]}>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View>
          <Text style={styles.titleTextLarge}>LEVELS</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
