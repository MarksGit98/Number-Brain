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

export const Symbols = () => {
  const dispatch = useDispatch();
  const symbols = ["+", "-", "x", "/"];

  return (
    <View top="20%" style={styles.row}>
      {symbols.map((symbol) => {
        return (
          <TouchableWithoutFeedback
            onPress={() =>
              dispatch({ type: "selectSymbol", payload: { symbol } })
            }
          >
            <View
              style={
                symbol === { symbol }
                  ? [styles.tile, styles.SelectedSymbol]
                  : [styles.tile, styles.UnselectedTile]
              }
            >
              <Text style={styles.smallNumber}>{symbol}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};
