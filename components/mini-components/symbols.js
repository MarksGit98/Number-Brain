import React, { useState } from "react";
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

  const displaySymbols = (sign) => {
    return (
      <View
        style={[
          styles.symbolTile,
          selectedSymbol.symbol === sign
            ? styles.selectedSymbol
            : currentGamemode === LIMITED && symbols[`${sign}`] > 0
            ? styles.unselectedTile
            : styles.disabledTile,
        ]}
      >
        <View style={styles.outerSymbolTile}>
          <Text style={styles.titleTextSmall}>
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
    );
  };
  return (
    <View style={[styles.row]}>
      {signs.map((sign) => {
        return (
          <View style={styles.symbolsContainer} key={sign}>
            {currentGamemode === LIMITED ? (
              <View style={styles.quantityTile}>
                <Text style={styles.extraSmallWhiteText}>{symbols[sign]}</Text>
              </View>
            ) : null}
            <DepthButton
              key={sign}
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
