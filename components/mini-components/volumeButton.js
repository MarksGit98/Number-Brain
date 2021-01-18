import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import { BUTTON_CLICK, TOGGLE_VOLUME } from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";
export const VolumeButton = () => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);

  const handleButtonClick = () => {
    playSound(BUTTON_CLICK);
    dispatch({ type: TOGGLE_VOLUME });
  };
  return (
    <View styles={styles.volumeButtonPosition}>
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
