import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export const GameScreen = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View bottom="20%" style={styles.tiles}>
        <Text style={styles.bigNumber}>62</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>1</Text>
        </View>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>2</Text>
        </View>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>3</Text>
        </View>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>4</Text>
        </View>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>2</Text>
        </View>
        <View style={styles.tiles}>
          <Text style={styles.smallNumber}>8</Text>
        </View>
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

const styles = StyleSheet.create({
  bigNumber: {
    fontSize: 90,
    justifyContent: "center",
  },
  smallNumber: {
    fontSize: 42,
    marginRight: 10,
    marginLeft: 10,
  },
  mainView: {
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tiles: {
    backgroundColor: "yellow",
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
