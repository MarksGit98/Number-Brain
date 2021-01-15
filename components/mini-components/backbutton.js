import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../styles/styles";
import { PREVIOUS_SCREEN, BUTTON_CLICK } from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
export const BackButton = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    playSound(BUTTON_CLICK);
    dispatch({ type: PREVIOUS_SCREEN });
  };
  return (
    <View styles={styles.backButtonPosition}>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View>
          <Image
            style={[styles.backButton]}
            source={require("../../assets/back-arrow.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
