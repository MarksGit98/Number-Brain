import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../styles/styles";
import {
  gameModeSelector,
  selectedSymbolSelector,
  symbolSelector,
  volumeSelector,
} from "../selectors/stateSelectors";
import {
  SELECT_SYMBOL,
  LIMITED,
  SYMBOL_TAP,
  ERROR_CLICK,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { DepthButton } from "./3Dbutton.js";
export const Symbols = () => {
  const dispatch = useDispatch();
  const signs = ["add", "subtract", "multiply", "divide"];
  const selectedSymbol = useSelector(selectedSymbolSelector);
  const symbols = useSelector(symbolSelector);
  const currentGamemode = useSelector(gameModeSelector);
  const volume = useSelector(volumeSelector);
  const handleSymbolSelection = (sign) => {
    dispatch({ type: SELECT_SYMBOL, payload: sign });
    if (volume) {
      if (currentGamemode === LIMITED) {
        symbols[`${sign}`] > 0 ? playSound(SYMBOL_TAP) : playSound(ERROR_CLICK);
      } else playSound(SYMBOL_TAP);
    }
  };

  return (
    <View style={[styles.symbolRow]}>
      {signs.map((sign) => {
        return (
          <View style={styles.symbolContainer} key={sign}>
            {currentGamemode === LIMITED ? (
              <View style={styles.quantityTile}>
                <Text style={styles.extraSmallWhiteText}>{symbols[sign]}</Text>
              </View>
            ) : null}
            <DepthButton
              key={sign}
              type={"Symbol"}
              sign={sign}
              depressed={selectedSymbol.symbol === sign}
              propagateSelection={(sign) => handleSymbolSelection(sign)}
              buttonColor="red"
            ></DepthButton>
          </View>
        );
      })}
    </View>
  );
};
