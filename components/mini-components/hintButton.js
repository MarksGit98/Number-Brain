import React, { useEffect } from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../styles/styles";
import {
  ERROR_CLICK,
  PREVIOUS_SCREEN,
  BUTTON_CLICK,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector, solutionSelector } from "../selectors/stateSelectors";
export const HintButton = (props) => {
  const volume = useSelector(volumeSelector);
  const solution = useSelector(solutionSelector);

  useEffect(() => {
    if (solution) {
      const symbols = { add: 0, subtract: 0, multiply: 0, divide: 0 };
      solution.forEach((step) => (symbols[step.symbol] += 1));
      for (let i = 0; i < solution.length; i++) {
        symbols[solution[i].symbol] -= 1;
        solution[i] = { ...solution[i], remainingSymbols: { ...symbols } };
      }
      console.log(solution);
    }
  }, [solution]);

  const handleButtonClick = () => {
    if (volume) playSound(BUTTON_CLICK);
    console.log(solution);
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
            style={styles.wheelIconHintButton}
            source={require("../../assets/hint-icon.png").downloadAsync()}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
