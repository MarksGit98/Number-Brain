import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../styles/styles";
import { PREVIOUS_SCREEN, BUTTON_CLICK } from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";

export const VolumeButton = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    playSound(BUTTON_CLICK);
    dispatch({ type: PREVIOUS_SCREEN });
  };
  return (
    <View styles={styles.backButtonPosition}>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View style={styles.buttonWheel}>
          <Image
            style={[styles.volumeButton]}
            source={require("../../assets/volumeIcon.svg")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
