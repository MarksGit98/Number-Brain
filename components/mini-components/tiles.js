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
  tile1Selector,
  tile2Selector,
  difficultySelector,
} from "../selectors/stateSelectors";
import {
  SELECT_TILE,
  TILE_TAP,
  EASY,
  MEDIUM,
  HARD,
} from "../../constants/constants";
import { playSound } from "../../constants/buttonClick";
import { volumeSelector } from "../selectors/stateSelectors";

export const Tiles = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector(difficultySelector);
  const tiles = useSelector(tilesSelector);
  const index1 = useSelector(tile1Selector).index;
  const index2 = useSelector(tile2Selector).index;
  const volume = useSelector(volumeSelector);
  const handleTileSelection = (index) => {
    dispatch({ type: SELECT_TILE, payload: index });
    if (volume) playSound(TILE_TAP);
  };
  const getTileStyle = (tile, index) => {
    return index === index1
      ? [styles.tile, styles.selectedTile1]
      : index === index2
      ? [styles.tile, styles.selectedTile2]
      : [styles.tile, styles.unselectedTile];
  };

  const displayTileRows = () => {
    if (difficulty === EASY) {
      return (
        <View style={styles.tiles}>
          <View style={styles.row}>
            {tiles &&
              tiles.map((tile, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handleTileSelection(index)}
                >
                  <View style={getTileStyle(tile, index)}>
                    <Text style={styles.titleTextSmall}>{tile}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
          </View>
        </View>
      );
    } else if (difficulty === MEDIUM || difficulty === HARD) {
      return (
        <View>
          <View style={styles.row}>
            {tiles &&
              tiles.slice(0, 3).map((tile, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handleTileSelection(index)}
                >
                  <View style={getTileStyle(tile, index)}>
                    <Text style={styles.titleTextSmall}>{tile}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
          </View>
          <View style={styles.row}>
            {tiles &&
              tiles.slice(3, 6).map((tile, index) => (
                <TouchableWithoutFeedback
                  key={index + 3}
                  onPress={() => handleTileSelection(index + 3)}
                >
                  <View style={getTileStyle(tile, index + 3)}>
                    <Text style={styles.titleTextSmall}>{tile}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
          </View>
        </View>
      );
    }
  };

  return displayTileRows();
};
