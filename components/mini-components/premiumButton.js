import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import {
  BUTTON_CLICK,
  SWITCH_SCREEN,
  MAIN_MENU,
  PREMIUM_SCREEN,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";

export const PremiumButton = () => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);
  const handleButtonClick = () => {
    if (volume) playSound(BUTTON_CLICK);
    dispatch({
      type: SWITCH_SCREEN,
      payload: PREMIUM_SCREEN,
    });
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View style={[styles.buttonWheel]}>
          <Image
            style={[styles.wheelIconHomeButton]}
            source={require("../../assets/premium.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
