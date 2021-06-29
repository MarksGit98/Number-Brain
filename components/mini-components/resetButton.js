import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import { RESET_TILES, UNDO_TURN } from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";
export const ResetButton = (props) => {
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);

  const handleButtonClick = () => {
    dispatch({ type: RESET_TILES });
    if (volume) playSound(UNDO_TURN);
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
            style={styles.wheelIcon}
            source={require("../../assets/reset-icon.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
