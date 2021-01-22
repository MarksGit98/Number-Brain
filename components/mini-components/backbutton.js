import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import { PREVIOUS_SCREEN, BUTTON_CLICK } from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";
export const BackButton = () => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);
  const handleButtonClick = () => {
    try {
      if (volume) playSound(BUTTON_CLICK);
      dispatch({ type: PREVIOUS_SCREEN });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View styles={styles.backButtonPosition}>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View style={styles.buttonWheel}>
          <Image
            style={[styles.backButton]}
            source={require("../../assets/back-arrow.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
