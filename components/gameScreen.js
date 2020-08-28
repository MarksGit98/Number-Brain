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
import { Symbols } from "./symbols";
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
      <View bottom="10%" style={[styles.bigTile, styles.UnselectedTile]}>
        <Text style={styles.bigNumber}>{bigNumber}</Text>
      </View>
      <View>
        <Text style={styles.bigNumber}>{won === true ? "WON" : ""}</Text>
      </View>
      <View style={styles.row}>
        {tiles &&
          tiles.map((tile, index) => (
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
          ))}
      </View>
      <Symbols />
    </SafeAreaView>
  );
};
