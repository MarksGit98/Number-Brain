import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../styles/styles";
import { useDispatch } from "react-redux";
import {
  SELECT_GAMEMODE,
  GAME_SCREEN,
  SWITCH_SCREEN,
  BUTTON_CLICK,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";

export const PlayButton = (props) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    playSound(BUTTON_CLICK);
    dispatch({ type: SWITCH_SCREEN, payload: GAME_SCREEN });
  };

  const again = props.again;
  return (
    <View style={[styles.bigButton, { backgroundColor: "blue" }]}>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View>
          <Text style={styles.mediumWhiteText}>
            {again ? "PLAY AGAIN" : "PLAY"}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
