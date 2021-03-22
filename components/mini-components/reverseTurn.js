import React from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import { REVERSE_TURN, UNDO_TURN } from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";
export const ReverseTurn = () => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);

  const handleButtonClick = () => {
    dispatch({ type: REVERSE_TURN });
    if (volume) playSound(UNDO_TURN);
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleButtonClick()}>
      <Image
        style={styles.wheelIcon}
        source={require("../../assets/back-arrow.png")}
      />
    </TouchableWithoutFeedback>
  );
};
