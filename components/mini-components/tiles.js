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
  tilesSelector,
  bigNumberSelector,
  tile1Selector,
  tile2Selector,
  symbolSelector,
  wonSelector,
} from "../selectors/stateSelectors";
import { useSelectTile } from "../dispatches/dispatchOperations";
import { SELECT_TILE } from "../../constants/constants";

export const Tiles = () => {
  const dispatch = useDispatch();
  const tiles = useSelector(tilesSelector);
  const index1 = useSelector(tile1Selector).index;
  const index2 = useSelector(tile2Selector).index;
  return (
    <View style={styles.row}>
      {tiles &&
        tiles.map((tile, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => dispatch({ type: SELECT_TILE, payload: index })}
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
  );
};
