import React from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import { REVERSE_TURN } from "../constants/constants";
export const BackButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback onPress={() => dispatch({ type: TOGGLE_SCREEN })}>
      <Image
        style={styles.backButton}
        source={require("../assets/back-arrow.png")}
      />
    </TouchableWithoutFeedback>
  );
};
