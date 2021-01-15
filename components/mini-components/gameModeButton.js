import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SELECT_GAMEMODE,
  GAME_SCREEN,
  SWITCH_SCREEN,
  GAMEMODE_SCREEN,
  BUTTON_CLICK,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";

export default function GameModeButton() {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    playSound(BUTTON_CLICK);
    dispatch({ type: SWITCH_SCREEN, payload: GAMEMODE_SCREEN });
  };

  return (
    <View style={[styles.bigButton, { backgroundColor: "green" }]}>
      <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
        <View>
          <Text style={styles.mediumWhiteText}>GAMEMODE</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
