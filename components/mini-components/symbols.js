import React, { useState, useEffect } from "react";
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
} from "../selectors/stateSelectors";
import {
  SELECT_SYMBOL,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  CLASSIC,
  LIMITED,
  TIMETRIAL,
  BLITZ,
  SYMBOL_ENABLED_SELECT_SOUND,
  SYMBOL_DISABLED_SELECT_SOUND,
  SYMBOL_TAP,
  ERROR_CLICK,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
export const Symbols = () => {
  const dispatch = useDispatch();
  const signs = ["add", "subtract", "multiply", "divide"];
  const selectedSymbol = useSelector(selectedSymbolSelector);
  const symbols = useSelector(symbolSelector);
  const currentGamemode = useSelector(gameModeSelector);

  const handleSymbolSelection = (sign) => {
    dispatch({ type: SELECT_SYMBOL, payload: sign });
    if (currentGamemode === LIMITED) {
      symbols[`${sign}`] > 0 ? playSound(SYMBOL_TAP) : playSound(ERROR_CLICK);
    } else playSound(SYMBOL_TAP);
  };

  return (
    <View top="20%" style={styles.row}>
      {signs.map((sign) => {
        return (
          <TouchableWithoutFeedback
            key={sign}
            onPress={() => handleSymbolSelection(sign)}
          >
            {currentGamemode === LIMITED ? (
              <View>
                <View
                  style={
                    selectedSymbol.symbol === sign
                      ? [styles.symbolTile, styles.selectedSymbol]
                      : symbols[`${sign}`] > 0
                      ? [styles.symbolTile, styles.unselectedTile]
                      : [styles.symbolTile, styles.disabledTile]
                  }
                >
                  <Text style={styles.smallWhiteText}>
                    {sign === "add"
                      ? "+"
                      : sign === "subtract"
                      ? "-"
                      : sign === "multiply"
                      ? "x"
                      : sign === "divide"
                      ? "/"
                      : null}
                  </Text>
                </View>
                <View styles={styles.quantityTile}>
                  <Text styles={styles.smallWhiteText}>{symbols[sign]}</Text>
                </View>
              </View>
            ) : (
              <View>
                <View
                  style={
                    selectedSymbol.symbol === sign
                      ? [styles.symbolTile, styles.selectedSymbol]
                      : [styles.symbolTile, styles.unselectedTile]
                  }
                >
                  <Text style={styles.smallWhiteText}>
                    {sign === "add"
                      ? "+"
                      : sign === "subtract"
                      ? "-"
                      : sign === "multiply"
                      ? "x"
                      : sign === "divide"
                      ? "/"
                      : null}
                  </Text>
                </View>
              </View>
            )}
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};
