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
  symbolSelector,
  wonSelector,
} from "./selectors/stateSelectors";
import { useSelectTile } from "./dispatches/dispatchOperations";
import { SELECT_SYMBOL } from "../constants/constants";

export const Symbols = () => {
  const dispatch = useDispatch();
  const signs = ["add", "subtract", "multiply", "divide"];
  const symbol = useSelector(symbolSelector);
  console.log(symbol);
  return (
    <View top="20%" style={styles.row}>
      {signs.map((sign) => {
        return (
          <TouchableWithoutFeedback
            key={sign}
            onPress={() => dispatch({ type: SELECT_SYMBOL, payload: sign })}
          >
            <View
              style={
                symbol.symbol === sign
                  ? [styles.tile, styles.SelectedSymbol]
                  : [styles.tile, styles.UnselectedTile]
              }
            >
              <Text style={styles.smallNumber}>{sign}</Text>
            </View>
            <View style={styles.quantityTile}>
              <Text styles={styles.smallNumber}>{symbol.quantity}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};
