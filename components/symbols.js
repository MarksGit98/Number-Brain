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
  const signs = ["+", "-", "x", "/"];
  const symbol = useSelector(symbolSelector);

  return (
    <View top="20%" style={styles.row}>
      {signs.map((sign) => {
        return (
          <TouchableWithoutFeedback
            key={sign}
            onPress={() => dispatch({ type: "selectSymbol", payload: sign })}
          >
            <View
              style={
                symbol === sign
                  ? [styles.tile, styles.SelectedSymbol]
                  : [styles.tile, styles.UnselectedTile]
              }
            >
              <Text style={styles.smallNumber}>{sign}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};
