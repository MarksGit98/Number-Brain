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
  BUTTON_CLICK,
} from "../../constants/constants";
import { viewSelector, volumeSelector } from "../selectors/stateSelectors";
import { playSound } from "../../constants/buttonClick";

export const PlayButton = (props) => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);

  const handleButtonClick = () => {
    dispatch({ type: SWITCH_SCREEN, payload: GAME_SCREEN });
    if (volume) playSound(BUTTON_CLICK);
  };

  const again = props.again;
  return (
    <View style={[styles.bigButton, { backgroundColor: "blue" }]}>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View>
          <Text style={styles.titleTextLarge}>
            {again ? "PLAY AGAIN" : "PLAY"}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
