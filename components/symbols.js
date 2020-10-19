import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import {
  tilesSelector,
  bigNumberSelector,
  tile1Selector,
  tile2Selector,
  selectedSymbolSelector,
  symbolSelector,
  wonSelector,
} from "./selectors/stateSelectors";
import { useSelectTile } from "./dispatches/dispatchOperations";
import { SELECT_SYMBOL } from "../constants/constants";

export const Symbols = () => {
  const dispatch = useDispatch();
  const signs = ["add", "subtract", "multiply", "divide"];
  const selectedSymbol = useSelector(selectedSymbolSelector);
  const symbols = useSelector(symbolSelector);

  return (
    <View top="20%" style={styles.row}>
      {signs.map((sign) => {
        return (
          <TouchableWithoutFeedback
            key={sign}
            onPress={() => dispatch({ type: SELECT_SYMBOL, payload: sign })}
          >
            <View>
              <View
                style={
                  selectedSymbol.symbol === sign
                    ? [styles.tile, styles.SelectedSymbol]
                    : symbols[`${sign}`] > 0 ? [styles.tile, styles.UnselectedTile] :
                    [styles.tile, styles.DisabledTile]
                }
              >
                <Text style={styles.smallNumber}>
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
                <Text styles={styles.smallNumber}>{symbols[sign]}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};
