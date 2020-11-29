import React from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../styles/styles";
import { REVERSE_TURN } from "../../constants/constants";
export const ReverseTurn = () => {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback onPress={() => dispatch({ type: REVERSE_TURN })}>
      <Image
        style={styles.reverseTurnButton}
        source={require("../assets/back-arrow.png")}
      />
    </TouchableWithoutFeedback>
  );
};
