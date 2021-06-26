import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../styles/styles";
import {
  ERROR_CLICK,
  PREVIOUS_SCREEN,
  BUTTON_CLICK,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector, solutionSelector } from "../selectors/stateSelectors";
export const HintButton = () => {
  const volume = useSelector(volumeSelector);
  const solution = useSelector(solutionSelector);
  const handleButtonClick = () => {
    if (volume) playSound(BUTTON_CLICK);
    console.log(solution);
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View style={[styles.buttonWheel]}>
          <Image
            style={styles.wheelIcon}
            source={require("../../assets/hint-icon.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
