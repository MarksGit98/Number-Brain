import React, { useEffect } from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import {
  BUTTON_CLICK,
  TOGGLE_VOLUME,
  LOCAL_VOLUME,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";
import { _retrieveData } from "../../localStorage/retrieveData";
export const VolumeButton = () => {
  const dispatch = useDispatch();
  const currentVolume = useSelector(volumeSelector);

  const setSettings = async () => {
    const volume = await _retrieveData(LOCAL_VOLUME);
    if (currentVolume.toString() !== volume) {
      dispatch({ type: TOGGLE_VOLUME });
    }
  };

  useEffect(() => {
    setSettings();
  }, []);

  const handleButtonClick = () => {
    playSound(BUTTON_CLICK);
    dispatch({ type: TOGGLE_VOLUME });
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View style={[styles.buttonWheel]}>
          <Image
            style={[styles.wheelIconVolumeButton]}
            source={
              currentVolume
                ? require("../../assets/speaker-on.png")
                : require("../../assets/speaker-off.png")
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
