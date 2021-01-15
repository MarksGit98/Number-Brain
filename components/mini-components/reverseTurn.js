import React from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../styles/styles";
import { REVERSE_TURN, UNDO_TURN } from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
export const ReverseTurn = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    playSound(UNDO_TURN);
    dispatch({ type: REVERSE_TURN });
  };
  return (
    <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
      <Image
        style={styles.reverseTurnButton}
        source={require("../../assets/back-arrow.png")}
      />
    </TouchableWithoutFeedback>
  );
};
