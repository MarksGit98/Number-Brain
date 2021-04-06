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
  tilesSelector,
  bigNumberSelector,
  tile1Selector,
  tile2Selector,
  symbolSelector,
  wonSelector,
} from "../selectors/stateSelectors";
import { SELECT_TILE, TILE_TAP } from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";
export const Tiles = () => {
  const dispatch = useDispatch();
  const tiles = useSelector(tilesSelector);
  const index1 = useSelector(tile1Selector).index;
  const index2 = useSelector(tile2Selector).index;
  const volume = useSelector(volumeSelector);
  const handleTileSelection = (index) => {
    dispatch({ type: SELECT_TILE, payload: index });
    if (volume) playSound(TILE_TAP);
  };

  return (
    <View style={styles.row}>
      {tiles &&
        tiles.map((tile, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handleTileSelection(index)}
          >
            <View
              style={
                index === index1
                  ? [styles.tile, styles.selectedTile1]
                  : index === index2
                  ? [styles.tile, styles.selectedTile2]
                  : [styles.tile, styles.unselectedTile]
              }
            >
              <Text style={styles.titleTextSmall}>{tile}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
    </View>
  );
};
