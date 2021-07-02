import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import {
  ERROR_CLICK,
  PREVIOUS_SCREEN,
  BUTTON_CLICK,
  RESET_TILES,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import {
  volumeSelector,
  previousScreensSelector,
} from "../selectors/stateSelectors";
export const BackButton = (props) => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);
  const previousScreens = useSelector(previousScreensSelector);
  const handleButtonClick = () => {
    if (previousScreens.length > 0) {
      if (volume) playSound(BUTTON_CLICK);
      dispatch({ type: RESET_TILES });
      dispatch({ type: PREVIOUS_SCREEN });
    } else {
      if (volume) playSound(ERROR_CLICK);
    }
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View
          style={[
            styles.buttonWheel,
            props.floatRight ? styles.rightColumn : null,
          ]}
        >
          <Image
            style={styles.wheelIconBackButton}
            source={require("../../assets/back-button.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
