import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
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
export const GameScreen = () => {
  const dispatch = useDispatch();
  const tiles = useSelector(tilesSelector);
  const bigNumber = useSelector(bigNumberSelector);
  const index1 = useSelector(tile1Selector).index;
  const index2 = useSelector(tile2Selector).index;
  const symbol = useSelector(symbolSelector);
  const won = useSelector(wonSelector);
  return (
    <SafeAreaView style={styles.mainView}>
      <View bottom="20%" style={[styles.tile, styles.UnselectedTile]}>
        <Text style={styles.bigNumber}>{bigNumber}</Text>
      </View>
      <View>
        <Text style={styles.bigNumber}>{won === true ? "WON" : ""}</Text>
      </View>
      <View style={styles.row}>
        {tiles &&
          tiles.map((tile, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => dispatch({ type: "selectTile", payload: index })}
            >
              <View
                style={
                  index === index1
                    ? [styles.tile, styles.SelectedTile1]
                    : index === index2
                    ? [styles.tile, styles.SelectedTile2]
                    : [styles.tile, styles.UnselectedTile]
                }
              >
                <Text style={styles.smallNumber}>{tile}</Text>
              </View>
            </TouchableHighlight>
          ))}
      </View>
      <View top="20%" style={styles.row}>
        <TouchableHighlight
          onPress={() => dispatch({ type: "selectSymbol", payload: "+" })}
        >
          <View
            style={
              symbol === "+"
                ? [styles.tile, styles.SelectedSymbol]
                : [styles.tile, styles.UnselectedTile]
            }
          >
            <Text style={styles.smallNumber}>+</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => dispatch({ type: "selectSymbol", payload: "-" })}
        >
          <View
            style={
              symbol === "-"
                ? [styles.tile, styles.SelectedSymbol]
                : [styles.tile, styles.UnselectedTile]
            }
          >
            <Text style={styles.smallNumber}>-</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => dispatch({ type: "selectSymbol", payload: "*" })}
        >
          <View
            style={
              symbol === "*"
                ? [styles.tile, styles.SelectedSymbol]
                : [styles.tile, styles.UnselectedTile]
            }
          >
            <Text style={styles.smallNumber}>x</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => dispatch({ type: "selectSymbol", payload: "/" })}
        >
          <View
            style={
              symbol === "/"
                ? [styles.tile, styles.SelectedSymbol]
                : [styles.tile, styles.UnselectedTile]
            }
          >
            <Text style={styles.smallNumber}>/</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
