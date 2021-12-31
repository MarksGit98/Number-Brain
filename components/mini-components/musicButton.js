import React, { useEffect } from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import {
  BUTTON_CLICK,
  LOCAL_MUSIC,
  TOGGLE_MUSIC,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { musicSelector, volumeSelector } from "../selectors/stateSelectors";
import { _retrieveData } from "../../localStorage/retrieveData";

export const MusicButton = () => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);
  const currentMusic = useSelector(musicSelector);

  const setSettings = async () => {
    const music = await _retrieveData(LOCAL_MUSIC);
    if (currentMusic.toString() !== music) {
      dispatch({ type: TOGGLE_MUSIC });
    }
  };

  useEffect(() => {
    setSettings();
  }, []);

  const handleButtonClick = () => {
    if (volume) playSound(BUTTON_CLICK);
    dispatch({ type: TOGGLE_MUSIC });
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View style={[styles.buttonWheel]}>
          <Image
            style={[styles.wheelIconMusicButton]}
            source={
              currentMusic
                ? require("../../assets/music-note.png")
                : require("../../assets/music-note-crossed-out.png")
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
