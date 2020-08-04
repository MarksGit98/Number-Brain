import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles/styles";
import { tilesSelector } from "./selectors/tileSelector";
export const GameScreen = () => {
  const tiles = useSelector(tilesSelector());
  return (
    <SafeAreaView style={styles.mainView}>
      <View bottom="20%" style={styles.tiles}>
        <Text style={styles.bigNumber}>62</Text>
      </View>
      <View style={styles.row}>
        {tiles &&
          tiles.map((tile) => (
            <View style={styles.tiles}>
              <Text style={styles.smallNumber}>{tile}</Text>
            </View>
          ))}
      </View>
      <View top="20%" style={styles.row}>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>+</Text>
        </View>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>-</Text>
        </View>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>x</Text>
        </View>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>/</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
