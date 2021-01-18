import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  SELECT_GAMEMODE,
  GAME_SCREEN,
  SWITCH_SCREEN,
  MAIN_MENU,
  BUTTON_CLICK,
} from "../../constants/constants";
import { volumeSelector } from "../selectors/stateSelectors";
import { playSound } from "../../constants/buttonClick";

export const MainMenuButton = () => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);

  const handleButtonClick = () => {
    if (volume) playSound(BUTTON_CLICK);
    dispatch({ type: SWITCH_SCREEN, payload: MAIN_MENU });
  };

  return (
    <View style={[styles.bigButton, { backgroundColor: "red" }]}>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View>
          <Text style={styles.mediumWhiteText}>MAIN MENU</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
