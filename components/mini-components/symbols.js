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
} from "../../constants/constants";

export const Symbols = () => {
  const dispatch = useDispatch();
  const signs = ["add", "subtract", "multiply", "divide"];
  const selectedSymbol = useSelector(selectedSymbolSelector);
  const symbols = useSelector(symbolSelector);
  const currentGamemode = useSelector(gameModeSelector);

  return (
    <View top="20%" style={styles.row}>
      {signs.map((sign) => {
        return (
          <TouchableWithoutFeedback
            key={sign}
            onPress={() => dispatch({ type: SELECT_SYMBOL, payload: sign })}
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
                      ? [styles.tile, styles.SelectedSymbol]
                      : [styles.tile, styles.unselectedTile]
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
